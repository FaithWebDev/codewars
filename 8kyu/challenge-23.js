// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let string = ''
    string.forEach(element => {
        string = string + string[i] + string[i]
    })
    return string
}

console.log(doubleChar('string'))


