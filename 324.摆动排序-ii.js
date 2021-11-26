/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    const sort = nums.sort((a, b) => a - b).slice();
    let l = sort.length - 1, mid = l>>1
    for(let i = 0; i < sort.length; i++) {
        nums[i] = i&1? sort[l--] : sort[mid--]
    }
};
// @lc code=end

