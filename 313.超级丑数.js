/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    let points = new Array(primes.length).fill(0);
    const dp = new Array(n).fill(0);
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(...primes.map((item, index) => dp[points[index]] * item));
        for (let j = 0; j < primes.length; j++) {
            if (dp[i] === dp[points[j]] * primes[j]) points[j]++;
        }
    }
    return dp[n - 1];
};
// @lc code=end

