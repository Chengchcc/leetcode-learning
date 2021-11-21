/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    quicksort(nums, 0, nums.length - 1);
    return nums[nums.length - k];
};

var quicksort = function(nums, left, right) {
    let pivot = nums[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (nums[i] < pivot) {
            i++;
        }
        while (nums[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }
    if (left < j) {
        quicksort(nums, left, j);
    }
    if (i < right) {
        quicksort(nums, i, right);
    }
}
// @lc code=end

