/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0;
    for (let i = 0; i < 32; ++i) {
        // 依次确定每一个二进制位
        let total = 0;
        for (const num of nums) {
            total += (num >> i & 1) ? 1: 0;
        }
        if (total % 3 != 0) {
            ans |= (1 << i);
        }
    }
    return ans;
};
// @lc code=end

