const fs = require("fs");

function main(text) {
    

    for (let i=0; i<text.length; i++) {
        const packetFinder = new Set(text.slice(i, i+4))
        if (packetFinder.size === 4) {
            console.log(i + 4)
            break;
        }
    }
}

main(fs.readFileSync("./input.txt", { encoding: "utf-8" }));
