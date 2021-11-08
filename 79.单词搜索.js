/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length, n = board[0].length
    const visited = new Array(m).fill(0).map(()=> new Array(n).fill(false))

    const check = function(row, col, i){
        if(i === word.length) return true
        if(row<0||row==m||col<0||col==n) return false
        if(visited[row][col] || board[row][col] !== word[i]) return false

        visited[row][col] = true
        const flag = check(row-1, col, i+1) || check(row+1, col, i+1) || check(row, col-1, i+1) || check(row, col+1, i+1)
        if(flag) return true
        visited[row][col] = false
        return false
    }

    for(let i =0 ; i<m; i++){
        for(let j =0; j<n; j++){
            if(board[i][j] === word[0] && !visited[i][j]){
                if(check(i, j, 0)) return true
            }
        }
    }
    return false
};
// @lc code=end

