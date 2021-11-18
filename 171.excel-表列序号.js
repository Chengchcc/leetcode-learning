/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let multiple = 1;
    return columnTitle.split('').reduceRight((acc, cur) => {
         acc += (cur.charCodeAt() - 'A'.charCodeAt() + 1) * multiple;
         multiple*=26
         return acc
    }, 0)
};
// @lc code=end

