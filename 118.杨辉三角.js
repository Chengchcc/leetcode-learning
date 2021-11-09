/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (n) {
    let count = new Array(n)
    for (var i = 0; i < n; i++) {
        count[i] = new Array(i + 1).fill(1)
    }
    if (n < 2) return count
    for (var i = 2; i < count.length; i++)
        for (var j = 1; j < count[i].length - 1; j++)
            count[i][j] = count[i - 1][j - 1] + count[i - 1][j]
    return count
};
// @lc code=end

