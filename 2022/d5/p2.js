const fs = require("fs");
const splitLines = require("../../helperFunctions");

function main(text) {
  const lines = splitLines(text);
  
}

main(fs.readFileSync("./data.txt", { encoding: "utf-8" }));
