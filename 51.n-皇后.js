/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    function backtrack(board, row) {
        if (row === board.length) {
            const stringsBoard = board.slice(); // 拷贝一份board
            for (let i = 0; i < n; i++) {
                stringsBoard[i] = stringsBoard[i].join(''); // 将每一行拼成字符串
            }
            res.push(stringsBoard); // 推入res数组
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = "Q";          // 作出选择，放置皇后
                backtrack(board, row + 1);                // 继续选择，往下递归
                board[row][col] = '.';
            }
        }
    }
    const res = [];
    const board = new Array(n);
    for (let i = 0; i < n; i++) {     // 棋盘的初始化
        board[i] = new Array(n).fill('.');
    }
    backtrack(board, 0);
    return res;
};

var isValid = function (board, row, col) {
    const n = board.length;
    // 检查列中是否有皇后互相冲突
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') {
            return false;
        }
    }
    // 检查右上方是否有皇后互相冲突
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }
    return true;
}
// @lc code=end

