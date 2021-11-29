/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let rows = matrix.length, cols = matrix[0].length;
    const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    const dfs = (i, j) => {
        if (visited[i][j]) return visited[i][j];
        let max = 1;
        for (const [di, dj] of dirs) {
            let x = i + di, y = j + dj;
            if (x < 0 || x >= rows || y < 0 || y >= cols || matrix[x][y] <= matrix[i][j]) continue;
            max = Math.max(max, 1 + dfs(x, y));
        }
        visited[i][j] = max;
        return max;
    }

    let max = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            max = Math.max(max, dfs(i, j));
        }
    }
    return max;
};
// @lc code=end

