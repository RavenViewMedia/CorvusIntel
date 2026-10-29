async function getUSGSStories() {
    const response = await fetch(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    );

    if (!response.ok) {
        throw new Error(`USGS request failed: ${response.status}`);
    }

    const data = await response.json();

    return data.features.slice(0, 10).map(quake => ({
        priority: "🟢",
        title: quake.properties.title,
        summary: `Magnitude ${quake.properties.mag} earthquake detected.`,
        category: "Earthquake",
        source: "USGS",
        time: new Date(quake.properties.time).toLocaleString("en-US")
    }));
}

module.exports = {
    getUSGSStories
};