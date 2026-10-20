const fs = require("fs");

async function run() {
    console.log("Corvus Collector Starting...");

    const response = await fetch(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    );

    const data = await response.json();

    const stories = data.features.slice(0, 10).map(quake => ({
        priority: "🟢",
        title: quake.properties.title,
        summary: `Magnitude ${quake.properties.mag} earthquake detected.`,
        category: "Earthquake",
        source: "USGS",
        time: new Date(quake.properties.time).toLocaleString("en-US")
    }));

    fs.writeFileSync(
        "../data/stories.json",
        JSON.stringify(stories, null, 2)
    );

    console.log(`Saved ${stories.length} earthquake stories.`);
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});