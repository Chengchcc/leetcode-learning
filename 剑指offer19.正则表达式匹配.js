/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const n = s.length + 1, m = p.length + 1
    let dp = new Array(n).fill(0).map(() => new Array(m).fill(0))
    for (let i = 0; i < n; i++) {
        dp[i][0] = 0
    }
    dp[0][0] = true
    for (let j = 2; j < m; j += 2) {
        dp[0][j] = dp[0][j - 2] && p[j - 1] == '*'
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (p[j - 1] == '*') {
                dp[i][j] = dp[i][j - 2] || dp[i - 1][j] && (s[i - 1] == p[j - 2] || p[j - 2] == '.')
            } else {
                dp[i][j] = dp[i - 1][j - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == '.')
            }
        }
    }
    return dp[n - 1][m - 1]
};