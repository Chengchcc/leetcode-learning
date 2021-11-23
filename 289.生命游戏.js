/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length, n=board[0].length;
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let lives = 0;
            for(let d of dirs) {
                const x = i + d[0], y = j + d[1];
                if (x >= 0 && x < m && y >= 0 && y < n) {
                    lives += board[x][y] & 1;
                }
            }
            if (board[i][j] & 1) {
                if (lives === 2 || lives === 3) {
                    board[i][j] +=2;
                }
            } else {
                if (lives === 3) {
                    board[i][j] +=2;
                }
            }
        }
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            board[i][j] >>= 1;
        }
    }
};
// @lc code=end

