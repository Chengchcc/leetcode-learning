/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // 双指针
    if (needle.length === 0) return 0;
    if (haystack.length === 0) return -1;
    let i = 0;
    let j = 0;
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            if (j === needle.length - 1) return i - j;
            i++;
            j++;
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    return -1;
};
// @lc code=end

