/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return /^[\+\-]?((\d+(\.\d*)?)|\.\d+)([eE][-+]?\d+)?$/.test(s)
};
// @lc code=end

