/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    // 动态划分
    // let dp = new Array(nums.length).fill(1);
    // for (let i = 1; i < nums.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //     if (nums[i] > nums[j]) {
    //         dp[i] = Math.max(dp[i], dp[j] + 1);
    //     }
    //     }
    // }
    // return Math.max(...dp);
    // 贪心+ 二分 nlogn
    let tail = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > tail[tail.length - 1]) {
            tail.push(nums[i]);
        } else {
            let left = 0, right = tail.length - 1;
            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (tail[mid] < nums[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            tail[left] = nums[i];
        }
    }
    return tail.length;
};
// @lc code=end

