/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let idx = 0;
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > nums[idx]) {
            idx = i;
        }
    }
    return idx;
};
// @lc code=end

