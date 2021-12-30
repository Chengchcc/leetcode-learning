/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    let dp = new Array(n + 1).fill(0)
    dp[1] = 1
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for(let j = 2; j< i; j++){
            // j*(i-j) 表示 拆分成2个长度的组合
            // dp[i-j] * j 表示 拆分成2个及以上长度的组合
            dp[i] = Math.max(dp[i], j * (i - j), dp[i - j] * j)
        }
    }
    return dp[n]
};