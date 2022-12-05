const fs = require("fs");
const splitLines = require("../../helperFunctions");

function main(text) {
  const lines = splitLines(text);
  let priority = 0;
  while (lines.length > 0) {
    for (let i = 0; i < lines[0].length; i++) {
      if (lines[1].includes(lines[0][i]) && lines[2].includes(lines[0][i])) {
        let commonItem = lines[0][i];
        if (commonItem == commonItem.toUpperCase()) {
          commonItem = commonItem.toLowerCase();
          priority += commonItem.charCodeAt(0) - 70;
        } else {
          commonItem = commonItem.toUpperCase();
          priority += commonItem.charCodeAt(0) - 64;
        }
        lines.shift();
        lines.shift();
        lines.shift();
        break;
      }
    }
  }
  console.log(priority);
}

main(fs.readFileSync("./data.txt", { encoding: "utf-8" }));