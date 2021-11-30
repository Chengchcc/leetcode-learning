/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = new Array(n + 1).fill(0);
    for (let i = 2 ; i<= n; i++){
        let curMax = 0
        for (let j = 1; j < i; j++){
            curMax = Math.max(curMax, j * (i - j), j * dp[i - j])
        }
        dp[i] = curMax
    }
    return dp[n]
};
// @lc code=end

