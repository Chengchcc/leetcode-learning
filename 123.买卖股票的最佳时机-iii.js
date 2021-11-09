/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length
    const dp = new Array(len).fill(0).map(() => (new Array(6).fill(0)))
    /*
        0：无股票且交易0次
        1：无股票且交易1次
        2：无股票且交易2次
        3：有股票且交易0次
        4：有股票且交易1次
        5：有股票且交易2次
        */
    dp[0][0] = 0
    for (let i = 1; i < 6; i++) dp[0][i] = -Infinity;
    dp[0][3] = -prices[0]

    for (let i = 1; i < len; i++) {
        dp[i][0] = dp[i - 1][0];
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3] + prices[i]);
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][4] + prices[i]);
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][0] - prices[i]);
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][1] - prices[i]);
        dp[i][5] = Math.max(dp[i - 1][5], dp[i - 1][2] - prices[i]);
    }
    return Math.max(dp[len - 1][0], dp[len - 1][1], dp[len - 1][2])
};
// @lc code=end

