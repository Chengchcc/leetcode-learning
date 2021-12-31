/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ans = 0
    while(n){
        ans++
        n = n & (n-1)
    }
    return ans
};