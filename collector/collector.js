const fs = require("fs");

console.log("==================================");
console.log("      CORVUS COLLECTOR");
console.log("==================================");

const sources = JSON.parse(
    fs.readFileSync("./collector/sources.json", "utf8")
);

console.log("");

sources.forEach(source => {
    console.log(`Checking: ${source.name}`);
    console.log(`URL: ${source.url}`);
    console.log("-----------------------------");
});

console.log("");
console.log(`Loaded ${sources.length} intelligence sources.`);