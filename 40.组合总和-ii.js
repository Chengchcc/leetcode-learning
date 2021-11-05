/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const ans = [];
    candidates.sort((a, b) => a - b);
    const dfs = (arr, sum, index) => {
        if (sum === target) {
            ans.push(arr);
            return;
        }
        if (sum > target) return;
        for (let i = index; i < candidates.length; i++) {
            if (sum + candidates[i] > target) break;
            if (i > index && candidates[i] === candidates[i - 1]) continue;
            dfs([...arr, candidates[i]], sum + candidates[i], i+1);
        }
    }
    dfs([], 0, 0);
    return ans
};
// @lc code=end

