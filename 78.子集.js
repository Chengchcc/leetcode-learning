/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [[]];
    const backtracking = (arr, index) => {
        if (index >= nums.length) {
            return;
        }

        const t = [...arr, nums[index]];
        res.push(t);
        backtracking(t, index + 1);

        backtracking(arr, index + 1);
    };

    backtracking([], 0);

    return res;
};
// @lc code=end

