/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0, i = 0, j = 0, min = Infinity
    while (j < nums.length) {
        sum += nums[j]
        while (sum >= target) {
            min = Math.min(min, j - i + 1)
            sum -= nums[i++]
        }
        j++
    }
    return min === Infinity ? 0 : min
};
// @lc code=end

