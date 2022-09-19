/* Simple, given a string of words, return the length of the shortest word(s). */

function findShort(s) {
    let shortString = s.split(' ').sort((a, b) => a.length - b.length)
    return shortString[0].length
}

console.log(findShort("Steem Steem Classic 21inc LiteCoin Dogecoin Monero BTC Steem Waves ProofOfStake"))