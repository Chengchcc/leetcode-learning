/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {

    const visited = new Array(m).fill(false).map(() => new Array(n).fill(false))
    let count = 0
    let getSum = function (num) {
        let sum = 0
        while (num) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        return sum
    }
    let dfs = function (i, j, k) {
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || getSum(i) + getSum(j) > k) return
        visited[i][j] = true
        count++
        dfs(i + 1, j, k)
        dfs(i - 1, j, k)
        dfs(i, j + 1, k)
        dfs(i, j - 1, k)

    }

    dfs(0, 0, k)
    
    return count
};