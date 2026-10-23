const fs = require("fs");
const path = require("path");

async function run() {
    console.log("Corvus Collector Starting...");

    const response = await fetch(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    );

    if (!response.ok) {
        throw new Error(`USGS request failed: ${response.status}`);
    }

    const data = await response.json();

    const stories = data.features.slice(0, 10).map(quake => ({
        priority: "🟢",
        title: quake.properties.title,
        summary: `Magnitude ${quake.properties.mag} earthquake detected.`,
        category: "Earthquake",
        source: "USGS",
        time: new Date(quake.properties.time).toLocaleString("en-US")
    }));

    const dataDir = path.join(__dirname, "..", "data");

    // Create the folder if it doesn't exist
    fs.mkdirSync(dataDir, { recursive: true });

    const outputFile = path.join(dataDir, "stories.json");

    fs.writeFileSync(
        outputFile,
        JSON.stringify(stories, null, 2),
        "utf8"
    );

    console.log(`Saved ${stories.length} earthquake stories.`);
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
