const fs = require("fs");

function main(text) {
  text = text.split("\n");
  let priority = 0;
  while (text.length > 0) {
    for (let i = 0; i < text[0].length; i++) {
      if (text[1].includes(text[0][i]) && text[2].includes(text[0][i])) {
        let commonItem = text[0][i];
        if (commonItem == commonItem.toUpperCase()) {
          commonItem = commonItem.toLowerCase();
          priority += commonItem.charCodeAt(0) - 70;
        } else {
          commonItem = commonItem.toUpperCase();
          priority += commonItem.charCodeAt(0) - 64;
        }
        text.shift();
        text.shift();
        text.shift();
        break;
      }
    }
  }
  console.log(priority);
}

main(fs.readFileSync("./example.txt", { encoding: "utf-8" }));
main(fs.readFileSync("./data.txt", { encoding: "utf-8" }));