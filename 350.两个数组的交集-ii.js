/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};
    let result = [];
    nums1.forEach(item => {
        if (map[item]) {
        map[item]++;
        } else {
        map[item] = 1;
        }
    });
    nums2.forEach(item => {
        if (map[item]) {
        result.push(item);
        map[item]--;
        }
    });
    return result;
};
// @lc code=end

