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
    const res = [];
    const backtracking = (temp, index) => {
        res.push(temp.slice())

        for (let i = index; i < nums.length; i++) {
            temp.push(nums[i])
            backtracking(temp, i + 1)
            temp.pop(nums[i])
        }
    };
    backtracking([], 0);


    return res;
};
// @lc code=end

