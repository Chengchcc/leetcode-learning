/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1, -1];
    let l = 0, r = nums.length - 1, ans = [];
    while (l <= r) {
        let mid = (l + r) >> 1
        if (nums[mid] < target) {
            l = mid + 1;
        }else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            ans[0] = mid;
            ans[1] = mid
            while(nums[++mid] === target){
                ans[1]++
            }
            mid = ans[0]
            while(nums[--mid] === target){
                ans[0]--
            }
            return ans
        }
    }
    return [-1, -1]
};
// @lc code=end

