const fs = require("fs");
const splitLines = require("../../helperFunctions");

function main(text) {
  const lines = splitLines(text);
  let mostCal = 0;
  let currentCal = 0;
  lines.forEach((line) => {
    if (line.length > 0) {
      currentCal += parseInt(line);
    } else {
      if (currentCal > mostCal) {
        mostCal = currentCal;
      }
      currentCal = 0;
    }
  });
  console.log(mostCal);
}

main(fs.readFileSync("./input.txt", { encoding: "utf-8" }));
