// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)


//number of row is how many numbers there are 
//if you have 10 rows there are 10 numbers
// each number goes up by 2 

function rowSumOddNumbers(n) {
    return n ** 2 * n
}