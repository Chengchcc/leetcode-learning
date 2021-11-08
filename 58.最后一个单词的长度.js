/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let num = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) === ' ' && num) {
            break;
        } else if (s.charAt(i) !== ' ') {
            num++;
        }
    }
    return num
};
// @lc code=end

