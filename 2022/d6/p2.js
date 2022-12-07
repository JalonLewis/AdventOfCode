const fs = require("fs");

function main(text) {
    

    for (let i=0; i<text.length; i++) {
        const packetFinder = new Set(text.slice(i, i+14))
        if (packetFinder.size === 14) {
            console.log(i+14)
            break;
        }
    }
}

main(fs.readFileSync("./input.txt", { encoding: "utf-8" }));
