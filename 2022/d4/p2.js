const fs = require("fs");
const splitLines = require("../../helperFunctions");

function main(text) {
  let count = 0;
  const lines = splitLines(text);
  for (let i = 0; i < lines.length; i++) {
    let pair = lines[i].split(",");
    let elf1 = pair[0].split("-");
    let elf2 = pair[1].split("-");

    if (
      (Number(elf1[0]) <= Number(elf2[0]) &&
        Number(elf1[1]) >= Number(elf2[1])) ||
      (Number(elf1[0]) >= Number(elf2[0]) &&
        Number(elf1[1]) <= Number(elf2[1])) ||
      (Number(elf1[0]) >= Number(elf2[0]) &&
        Number(elf1[0]) <= Number(elf2[1])) ||
      (Number(elf1[1]) >= Number(elf2[0]) && Number(elf1[0]) <= Number(elf2[1]))
    ) {
      count++;
    }
  }
  console.log(count);
}

main(fs.readFileSync("./input.txt", { encoding: "utf-8" }));
