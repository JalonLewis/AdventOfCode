const fs = require('fs');

function main(text){
    text = text.split('\n')
    let score = 0;
    text.forEach((game) => {
    
        if (game[0] === 'A' && game[2] === 'X') {
            score += 4
        }
        else if (game[0] === 'A' && game[2] === 'Y') {
            score += 8
        }
        else if (game[0] === 'A' && game[2] === 'Z') {
            score += 3
        }
        else if (game[0] === 'B' && game[2] === 'X') {
            score += 1
        }
        else if (game[0] === 'B' && game[2] === 'Y') {
            score += 5
        }
        else if (game[0] === 'B' && game[2] === 'Z') {
            score += 9
        }
        else if (game[0] === 'C' && game[2] === 'X') {
            score += 7
        }
        else if (game[0] === 'C' && game[2] === 'Y') {
            score += 2
        }
        else if (game[0] === 'C' && game[2] === 'Z') {
            score += 6
        }
    })
    
    console.log(score)
}

main(fs.readFileSync('./example.txt', {encoding: 'utf-8'}));
main(fs.readFileSync('./data.txt', {encoding: 'utf-8'}));