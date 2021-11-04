/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    for (let i = nums.length - 1; i >= 1; i--) {
        if (nums[i] > nums[i - 1]) {
            for (let j = nums.length - 1; j >= i; j--) {
                if (nums[j] > nums[i - 1]) {
                    swap(nums, i - 1, j);
                    reverse(nums, i);
                    return;
                }
            }
        }
    }
    reverse(nums)

};
var reverse = function(nums, start, end){
    let l = start | 0, r = end | nums.length - 1;
    while(l< r){
        swap(nums, l, r);
        l++;
        r--;
    }
}

var swap = function(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
// var nums = [1,3, 2]
// nextPermutation(nums)
// nums
// @lc code=end

