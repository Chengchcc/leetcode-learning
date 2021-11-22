/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = new Array(n);
    dp[0] = 1;
    let i2 = 0, i3 = 0, i5 = 0;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5);
        if (dp[i] === dp[i2] * 2) i2++;
        if (dp[i] === dp[i3] * 3) i3++;
        if (dp[i] === dp[i5] * 5) i5++;
    }
    return dp[n - 1];
};
// @lc code=end

