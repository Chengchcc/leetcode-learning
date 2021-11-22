/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xorsum = 0;

    for (const num of nums) {
        xorsum ^= num;
    }
    let type1 = 0, type2 = 0;
    const lsb = xorsum & (-xorsum);
    for (const num of nums) {
        if (num & lsb) {
            type1 ^= num;
        } else {
            type2 ^= num;
        }
    }
    return [type1, type2];
};
// @lc code=end

