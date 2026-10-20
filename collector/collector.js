const fs = require("fs");

console.log("Corvus Collector Starting...");

const stories = [
  {
    title: "Collector Test",
    source: "GitHub Action",
    priority: "high",
    timestamp: new Date().toISOString()
  }
];

fs.writeFileSync(
  "./CorvusIntel/data/stories.json",
  JSON.stringify(stories, null, 2)
);

console.log("Stories saved.");