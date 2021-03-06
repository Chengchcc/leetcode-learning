/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (prices == null || prices.length < 2 || k == 0) {
        return 0;
    }

    let dp = Array.from(Array(prices.length), () => Array(2 * k + 1).fill(0));

    for (let j = 1; j < 2 * k; j += 2) {
        dp[0][j] = 0 - prices[0];
    }

    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j < 2 * k; j += 2) {
            dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
            dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
        }
    }

    return dp[prices.length - 1][2 * k];
};
// @lc code=end

