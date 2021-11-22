/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length;
    // 定义左累积数组，初始值都为 1
    const resLeft = new Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        // 从i=1开始，作左累积运算
        resLeft[i] = resLeft[i - 1] * nums[i - 1];
    }
    let Right = 1;
    for (let i = len - 1; i >= 0; i--) {
        resLeft[i] = resLeft[i] * Right;
        Right *= nums[i];
    }
    return resLeft;
};
// @lc code=end

