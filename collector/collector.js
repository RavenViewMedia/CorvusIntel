console.log("Corvus Collector Starting...");

const fs = require("fs");

const sources = JSON.parse(
    fs.readFileSync("./collector/sources.json", "utf8")
);

console.log("Loaded Sources:");

sources.forEach(source => {
    console.log(
        `${source.priority.toUpperCase()} - ${source.name} (${source.url})`
    );
});