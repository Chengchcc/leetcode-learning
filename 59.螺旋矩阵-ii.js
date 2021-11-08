/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const  res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let cur = 1, left = 0, right = n - 1, top = 0, bottom = n - 1
    while (left <= right && top <= bottom) {
        for (let j = left; j <= right; j++) {
            res[top][j] = cur
            cur++
        }
        top++
        for (let i = top; i <= bottom; i++) {
            res[i][right] = cur
            cur++
        }
        right--
        for (let j = right; j >= left; j--) {
            res[bottom][j] = cur
            cur++
        }
        bottom--
        for (let i = bottom; i >= top; i--) {
            res[i][left] = cur
            cur++
        }
        left++
    }
    return res
};
// @lc code=end

