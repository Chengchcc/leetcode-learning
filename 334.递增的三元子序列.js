/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length < 3) return false;
    let min = Infinity, mid = Infinity;
    for(const num of nums) {
        if(num <= min) {
            min = num;
        } else if(num <= mid) {
            mid = num;
        } else {
            return true
        }
    }
    return false;
};
// @lc code=end

