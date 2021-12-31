/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let max = 0
    for (let i = 1; i <= n; i++) {
        max = max * 10 + 9
    }
    let ans = []
    for (let i = 1; i <= max; i++) {
        ans.push(i)
    }
    return ans
};