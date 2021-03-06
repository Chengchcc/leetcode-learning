/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length;
    const dp = Array(len).fill(0).map(v => Array(3).fill(0));
    dp[0] = [-prices[0], 0, 0];
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][2] - prices[i]); // 买入
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]); // 卖出
        dp[i][2] = dp[i-1][1]; // 冷冻
    }
    return dp[len-1][1];
};
// @lc code=end

