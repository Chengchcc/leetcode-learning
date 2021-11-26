/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let len = nums.length;
    const dp = Array(len+2).fill(0).map(() => Array(len+2).fill(0));
    const val = [1,...nums, 1]
    for(let i = len - 1; i >= 0; i--) {
        for(let j = i + 2; j <= len+1; j++) {
            for(let k = i + 1; k < j; k++) {
                // 戳破第k个气球，可以得到的最大值
                dp[i][j] = Math.max(dp[i][j], val[i] * val[k] * val[j] + dp[i][k] + dp[k][j]);
            }
        }
    }
    return dp[0][len + 1];
};
// @lc code=end

