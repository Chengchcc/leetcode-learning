/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l=0, r = nums.length-1;
    for(let i = l; i<=r; i++) {
        if(nums[i] === 0){
            [nums[l], nums[i]] = [nums[i], nums[l]]
            l++
        }else if(nums[i] === 2) {
            [nums[r], nums[i]] = [nums[i], nums[r]]
            r--
            i--
        }
    }
    return nums
};
// @lc code=end

