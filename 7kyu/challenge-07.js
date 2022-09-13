// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
    let numbersArr = numbers.split(' ')
    const sorted = numbersArr.sort((a, b) => a - b)
    let min = sorted[0]
    let max = sorted[sorted.length - 1]
    return `${max} ${min}`
}

console.log(highAndLow("1 2 3"))