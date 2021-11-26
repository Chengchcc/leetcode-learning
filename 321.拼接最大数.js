/*
 * @lc app=leetcode.cn id=321 lang=javascript
 *
 * [321] 拼接最大数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
    var pickMax = function (nums, k) {
        let stack = [];
        let drop = nums.length - k;

        for (let i = 0; i < nums.length; i++) {
            while (stack.length && stack[stack.length - 1] < nums[i] && drop) {
                stack.pop();
                drop--;
            }
            stack.push(nums[i]);
        }
        while (drop--) {
            stack.pop();
        }
        return stack;
    }

    var merge = function (nums1, nums2) {
        let ans = [];
        while (nums1.length || nums2.length) {
            let bigger = nums1 > nums2 ? nums1 : nums2;
            ans.push(bigger.shift());
        }
        return ans;
    }

    let ans = [];
    for (let i = 0; i <= k; i++) {
        if (i <= nums1.length && k - i <= nums2.length) {
            ans = ans > merge(pickMax(nums1, i), pickMax(nums2, k - i)) ? ans : merge(pickMax(nums1, i), pickMax(nums2, k - i));
        }
    }
    return ans;
};
maxNumber([6, 7], [6, 0, 4], 5)
// @lc code=end

