const fs = require("fs");
const path = require("path");

const { getUSGSStories } = require("./parsers/usgs");

async function run() {
    console.log("==================================");
    console.log("CORVUS COLLECTOR STARTING");
    console.log("==================================");

    const stories = await getUSGSStories();

    const dataDir = path.join(__dirname, "..", "data");
    fs.mkdirSync(dataDir, { recursive: true });

    const outputFile = path.join(dataDir, "stories.json");

    fs.writeFileSync(
        outputFile,
        JSON.stringify(stories, null, 2),
        "utf8"
    );

    console.log(`Saved ${stories.length} stories.`);
    console.log(`Output: ${outputFile}`);
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});