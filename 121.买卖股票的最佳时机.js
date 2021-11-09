/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length
    const dp = new Array(len).fill(0).map(()=>(new Array(2).fill(0)))
    // dp[i][j] 表示第i天 手中的现金, 0-持股 1-不持股 最终结果为dp[len-1][0]
    dp[0][0] = 0
    dp[0][1] = -prices[0]

    for (let i = 1; i < len; i++){
        dp[i][0] = Math.max(dp[i-1][1]+ prices[i], dp[i-1][0])
        dp[i][1] = Math.max(dp[i-1][1], -prices[i])
    }
    return dp[len-1][0]
};
// @lc code=end

