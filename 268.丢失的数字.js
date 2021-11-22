/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    let total = Math.floor(n * (n + 1) / 2);
    let arrSum = 0;
    for (let i = 0; i < n; i++) {
        arrSum += nums[i];
    }
    return total - arrSum;
};
// @lc code=end

