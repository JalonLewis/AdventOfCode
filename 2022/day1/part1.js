const fs = require('fs');

function main(text){
    text = text.split('\n')
    let mostCal = 0;
   let currentCal = 0;
    text.forEach((item) => {
        if (item.length > 0) {
            currentCal += parseInt(item)
        }
        else {
            if (currentCal > mostCal) {
                mostCal = currentCal
            }
            currentCal = 0;
        }
    })
    console.log(mostCal)
        //if index is num add i to cur if ind nan check if cur > most set most set cur to 0
}

main(fs.readFileSync('./data.txt', {encoding: 'utf-8'}));
main(fs.readFileSync('./example.txt', {encoding: 'utf-8'}));