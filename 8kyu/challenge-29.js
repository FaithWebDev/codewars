// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
    const arr = [];
    while (n > 0) {
        for (let i = 1; i <= n; i++) {
            arr.push(i)
        }
        return arr.reverse()
    }
};

console.log(reverseSeq(5))