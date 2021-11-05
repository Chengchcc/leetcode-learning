/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    const dfs = (arr, sum, index) => {
        if (sum === target) {
            ans.push(arr);
            return;
        }
        if (sum > target) return;
        for (let i = index; i < candidates.length; i++) {
            dfs([...arr, candidates[i]], sum + candidates[i], i);
        }
    }
    dfs([], 0, 0);
    return ans
};
// @lc code=end

