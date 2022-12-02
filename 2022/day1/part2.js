const fs = require("fs");

function main(text) {
  text = text.split("\n");
  let calArray = [];
  let currentCal = 0;
  text.forEach((item) => {
    if (item.length > 0) {
      currentCal += parseInt(item);
    } else {
      calArray.push(currentCal);
      currentCal = 0;
    }
  });

  calArray.sort(function (a, b) {
    return b - a;
  })

  console.log(calArray[0] + calArray[1] + calArray[2]);
  //if index is num add i to cur if ind nan check if cur > most set most set cur to 0
}

main(fs.readFileSync("./data.txt", { encoding: "utf-8" }));
