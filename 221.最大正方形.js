/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));
    dp[0][0] = matrix[0][0];
    for (let i = 1; i < m; i++) {
        dp[i][0] = matrix[i][0];
    }
    for (let j = 1; j < n; j++) {
        dp[0][j] = matrix[0][j];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
            }
        }
    }

    const maxSide =   Math.max(...dp.map(row => Math.max(...row)));
    return maxSide * maxSide;
};
// @lc code=end

