/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length, n = board[0].length
    let visited = new Array(m).fill(false).map(() => new Array(n).fill(false))
    var dfs = function (i, j, k) {
        if (k == word.length) return true
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] != word[k]) return false
        visited[i][j] = true
        let res = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1)
        visited[i][j] = false
        return res
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true
        }
    }
    return false
};