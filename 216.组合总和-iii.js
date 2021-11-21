/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const ans = [];
    const dfs = (arr, sum, index) => {
        if (sum === n && arr.length === k) {
            ans.push(arr);
            return;
        }
        if (sum > n || arr.length > k) return;
        for (let i = index; i < 10; i++) {
            dfs(arr.concat(i), sum + i, i + 1);
        }
    }
    dfs([], 0, 1);
    return ans
};
// @lc code=end

