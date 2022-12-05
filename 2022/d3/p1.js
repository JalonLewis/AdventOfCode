const fs = require("fs");
const splitLines = require("../../helperFunctions");

function main(text) {
  const lines = splitLines(text);
  let priority = 0;
  for (let i = 0; i < lines.length; i++) {
    const comp1 = lines[i].slice(0, lines[i].length / 2);
    const comp2 = lines[i].slice(lines[i].length / 2, lines[i].length);

    for (let i = 0; i < comp1.length; i++) {
      if (comp2.includes(comp1[i])) {
        let commonItem = comp1[i];
        if (commonItem == commonItem.toUpperCase()) {
          commonItem = commonItem.toLowerCase();
          priority += commonItem.charCodeAt(0) - 70;
        } else {
          commonItem = commonItem.toUpperCase();
          priority += commonItem.charCodeAt(0) - 64;
        }
        break;
      }
    }
  }
  console.log(priority);
}

main(fs.readFileSync("./data.txt", { encoding: "utf-8" }));
