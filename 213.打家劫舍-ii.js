/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    if(n==1) return nums[0];
    else if(n==2) return Math.max(nums[0],nums[1]);
    else return Math.max(robRange(nums, 0, n-2), robRange(nums, 1, n-1));
};

var robRange = function (nums, l, r) {
    const n = nums.length;
    const dp = new Array(n);
    dp[l] = nums[l];
    dp[l+1] = Math.max(nums[l], nums[l+1]);
    for (let i = l+2; i <= r; i++) {
        // 不偷  偷+ Math.max(dp[i-2]),
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[r];
};
// @lc code=end

