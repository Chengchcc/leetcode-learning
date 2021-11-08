/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const row = matrix.length, col = matrix[0].length, size = row * col, res = []
    let t = 0, r = col - 1, b = row - 1, l = 0 // 上右下左 四个方向

    while (res.length !== size) {
        // 从左到右
        for (let i = l; i <= r; i++) res.push(matrix[t][i])
        t++
        // 从上到下
        for (let i = t; i <= b; i++) res.push(matrix[i][r])
        r--

        // 检查下是否越觉
        if (res.length === size) break

        // 从右到左
        for (let i = r; i >= l; i--) res.push(matrix[b][i])
        b--
        // 从下到上
        for (let i = b; i >= t; i--) res.push(matrix[i][l])
        l++
    }

    return res
};
// @lc code=end

