/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r= nums.length -1;
    while(l < r){
        const mid = (l+r) >> 1;
        if(nums[mid] === target){
            return mid;
        }else {nums[mid] < target ? l = mid + 1 : r = mid - 1;}
    }
    return nums[l] < target ? l + 1 : l;

};
// @lc code=end

