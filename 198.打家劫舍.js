/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = nums[0];
    for (let i = 2; i <= n; i++) {
        // 不偷  偷+ Math.max(dp[i-2]),
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }
    return dp[n];
};
// @lc code=end

