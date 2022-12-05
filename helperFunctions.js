function splitLines(text) {
    return text.trim().split("\n").map(str => str.trim());
}

module.exports = splitLines;