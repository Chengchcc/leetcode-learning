/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];
    const backtracking = (temp, index) => {
        res.push(temp.slice())

        for (let i = index; i < nums.length; i++) {
            if (nums[i] === nums[i - 1] && i !== index) { continue }
            temp.push(nums[i])
            backtracking(temp, i+1)
            temp.pop(nums[i])
        }
    };
    nums.sort((a, b) => a - b)
    backtracking([], 0);

    return res;
};
// @lc code=end

