/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s.startsWith('0')) return 0
    const n = s.length;
    const f = new Array(n + 1).fill(0);
    f[0] = 1;
    for (let i = 1; i <= n; ++i) {
        if (s[i - 1] !== '0') {
            f[i] = f[i - 1];
        }
        if (i > 1 && s[i - 2] != '0' && (parseInt(s.slice(i-2, i)) <= 26)) {
            f[i] += f[i - 2];
        }
    }
    return f[n]
};
// @lc code=end

