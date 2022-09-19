/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
 */

function descendingOrder(n) {
    if (Math.sign(n) === 1) {
        return +Array.from(String(n)).sort((a, b) => {
            return b - a
        }).join('')
    } else {
        return 0
    }
}

