/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var n = s.length;
    const mp = new Map();
    const res = [];
    if (n <= 10) return res;
    for (let i = 0; i < n; i++) {
        let j = 0;
        j = i + 9;
        if (j >= n) break;
        const sub = s.substring(i, i + 10);
        mp.set(sub, (mp.get(sub) || 0) + 1);

        if (mp.get(sub) == 2) res.push(sub);
    }
    return res
};
// @lc code=end

