/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = [0];
    // x:odd res[x] = res[⌊x/2⌋] x:even res[x] = res[⌊x/2⌋] + 1
    for (let i = 1; i <= n; i++) {
        res[i] = res[i >> 1] + (i & 1);
    }
    return res;
};
// @lc code=end

