// You will be given a number and you will need to return it as a string in Expanded Form

function expandedForm(num) {
    return num.toString().split('').reverse().map((a, i) => a * Math.pow(10, i)).filter(a => a > 0).reverse().join(" + ")
}
console.log(expandedForm(70304))
