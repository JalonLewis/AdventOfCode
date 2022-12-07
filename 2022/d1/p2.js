const fs = require("fs");
const splitLines = require("../../helperFunctions");

function main(text) {
  const lines = splitLines(text);
  let calArray = [];
  let currentCal = 0;
  lines.forEach((line) => {
    if (line.length > 0) {
      currentCal += parseInt(line);
    } else {
      calArray.push(currentCal);
      currentCal = 0;
    }
  });

  calArray.sort(function (a, b) {
    return b - a;
  });

  console.log(calArray[0] + calArray[1] + calArray[2]);
}

main(fs.readFileSync("./input.txt", { encoding: "utf-8" }));
