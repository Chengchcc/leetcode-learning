/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length;
    const g = new Array(n).fill(0).map(() => new Array(n).fill(true));
    // 第一次动态规划 数据预处理 从后向前求出字符串 所有子串是否为回文串 true/false
    for (let i = n - 1; i >= 0; --i) {
        for (let j = i + 1; j < n; j++) {
            g[i][j] = (s[i] === s[j]) && g[i + 1][j - 1]
        }
    }
    const f= new Array(n).fill(Infinity);
    // 第二次动态规划  f[i]为 0 ~ i分割回文串的最小分割次数
    // 如果 0 ~ i 本身为回文串 则分割次数为0
    for (let i = 0; i < n; ++i) {
        if (g[0][i]) { // 
            f[i] = 0;
        } else {
            for (let j = 0; j < i; ++j) {
                if (g[j + 1][i]) {
                   f[i] = Math.min(f[i], f[j] + 1);
                }
            }
        }
    }
    return f[n - 1];
};
// @lc code=end

