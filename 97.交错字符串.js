/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let n = s1.length, m = s2.length
    if (n + m != s3.length) return false
    const dp = new Array(n+1).fill(0).map(()=>new Array(m+1).fill(false))
    dp[0][0] = true
    for (let i = 1; i <= n; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1]
    }
    for (let i = 1; i <= m; i++) {
        dp[0][i] = dp[0][i - 1] && s2[i - 1] == s3[i - 1]
    }
    for (let i = 1; i<=n; i++){
        for (let j =1; j<=m; j++){
            let p = i + j - 1;
            if (i > 0) {
                dp[i][j] |= (dp[i - 1][j] && s1[i - 1] == s3[p]);
            }
            if (j > 0) {
                dp[i][j] |= (dp[i][j - 1] && s2[j - 1] == s3[p]);
            }
        }
    }
    return dp[n][m]
};
// @lc code=end

