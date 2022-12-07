const fs = require("fs");

function main(text) {
  let sections = text.split("\n\n");

  let instructions = sections[1].split("\n").map((instruction) => {
    return instruction.split(" ");
  });

  for (let i = 0; i < instructions.length; i++) {
    instructions[i] = [
      instructions[i][1],
      instructions[i][3],
      instructions[i][5],
    ];
  }

  let numStacks = sections[0]
    .split("\n")
    [sections[0].split("\n").length - 1].split("   ").length;
  let rows = sections[0]
    .split("\n")
    .slice(0, sections[0].split("\n").length - 1)
    .reverse();
  var stacks = new Array(numStacks).fill([]).map(function (_) {
    return [];
  });

  for (let i = 0; i < rows.length; i++) {
    let stackNum = 1;
    let row = rows[i];

    for (let j = 1; j < row.length; j += 4) {
      if (row[j] !== " ") stacks[stackNum - 1].push(row[j]);
      stackNum++;
    }
  }

  for (let i = 0; i < instructions.length; i++) {
    const numToMove = instructions[i][0];
    const from = instructions[i][1];
    const to = instructions[i][2];
    for (let j = 0; j < numToMove; j++) {
      stacks[to - 1].push(stacks[from - 1].pop());
    }
  }

  let solution = [];

  for (let i = 0; i < stacks.length; i++) {
    solution.push(stacks[i][stacks[i].length - 1]);
  }
  console.log(solution.join(""));
}
main(fs.readFileSync("./input.txt", { encoding: "utf-8" }));
