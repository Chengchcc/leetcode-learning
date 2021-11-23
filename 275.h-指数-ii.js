/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= citations.length - i) {
            return citations.length - i;
        }
    }
    return 0;
};
// @lc code=end

