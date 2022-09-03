//Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]))
