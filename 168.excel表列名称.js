/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let str = ''
    while(columnNumber > 0) {
        let remainder = (columnNumber -1) % 26 + 1;
        columnNumber = Math.floor((columnNumber - remainder) / 26);
        str = String.fromCharCode(remainder - 1 + 'A'.charCodeAt()) + str
    }
    return str
};
// @lc code=end

