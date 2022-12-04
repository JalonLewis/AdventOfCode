const fs = require("fs");

function main(text) {
  let count = 0;
  text = text.split("\n");
  for (let i = 0; i < text.length; i++) {
    let pair = text[i].split(",");
    let elf1 = pair[0].split("-");
    let elf2 = pair[1].split("-");

    if (
      (Number(elf1[0]) <= Number(elf2[0]) &&
        Number(elf1[1]) >= Number(elf2[1])) ||
      (Number(elf1[0]) >= Number(elf2[0]) && Number(elf1[1]) <= Number(elf2[1]))
    ) {
      count++;
    }
  }
  console.log(count);
}

main(fs.readFileSync("./example.txt", { encoding: "utf-8" }));
main(fs.readFileSync("./data.txt", { encoding: "utf-8" }));
