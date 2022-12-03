const fs = require("fs");

function main(text) {
  text = text.split("\n");
  let priority = 0;
  for (let i = 0; i < text.length; i++) {
    const comp1 = text[i].slice(0, text[i].length / 2);
    const comp2 = text[i].slice(text[i].length / 2, text[i].length);

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

main(fs.readFileSync("./example.txt", { encoding: "utf-8" }));
main(fs.readFileSync("./data.txt", { encoding: "utf-8" }));
