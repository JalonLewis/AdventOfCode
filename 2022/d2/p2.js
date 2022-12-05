const fs = require("fs");
const splitLines = require("../../helperFunctions");

function main(text) {
  const games = splitLines(text);
  let score = 0;
  games.forEach((game) => {
    if (game[0] === "A" && game[2] === "X") {
      score += 3;
    } else if (game[0] === "A" && game[2] === "Y") {
      score += 4;
    } else if (game[0] === "A" && game[2] === "Z") {
      score += 8;
    } else if (game[0] === "B" && game[2] === "X") {
      score += 1;
    } else if (game[0] === "B" && game[2] === "Y") {
      score += 5;
    } else if (game[0] === "B" && game[2] === "Z") {
      score += 9;
    } else if (game[0] === "C" && game[2] === "X") {
      score += 2;
    } else if (game[0] === "C" && game[2] === "Y") {
      score += 6;
    } else if (game[0] === "C" && game[2] === "Z") {
      score += 7;
    }
  });

  console.log(score);
}

main(fs.readFileSync("./data.txt", { encoding: "utf-8" }));
