/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = '', p = 0, minLen = Math.min(...strs.map(str=>str.length))
    while (p < minLen && equalStr(strs.map(str=>str[p]))) {
        ans+=strs[0][p]
        p++
    }
    return ans

};

/**
 * @param {string[]} cs
 * @return {boolean}
 */
var equalStr = function(cs) {
    return cs.every(c=> c[0] == cs[0][0])
}
// @lc code=end

