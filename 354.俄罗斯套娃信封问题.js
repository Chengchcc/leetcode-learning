/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    const n = envelopes.length;
    if (n === 0) return 0;
    envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    const dp = new Array(n).fill(1);
    let max = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};
// @lc code=end

