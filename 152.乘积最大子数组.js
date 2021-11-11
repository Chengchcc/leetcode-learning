/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length
    const dp = new Array(n).fill(0).map(()=>[0, 0])
    dp[0] = [nums[0], nums[0]]
    for (let i = 1; i< n; i++ ){
        dp[i][0] = Math.max(
            dp[i - 1][0] * nums[i], // 以nums[i-1]为开头的最大值×当前num
            dp[i - 1][1] * nums[i],// 以nums[i-1]为开头的最小值×当前num有可能变成最大值，例如-2 × -3
            nums[i] // 如果前两种都没有当前num[i]大，就自成一派变成,以nums[i]开头的最大乘积
        )
        dp[i][1] = Math.min(
            dp[i-1][0] * nums[i],
            dp[i-1][1] * nums[i],
            nums[i]
        )
    }

    return Math.max(...dp.flat())
};
// @lc code=end

