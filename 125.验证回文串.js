/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase().split('');
    let str = a.join('')
    // reverse
    return str == a.reverse().join('')
    // 双指针
    // let left = 0;
    // let right = str.length - 1
    // while (left < right) {
    //     if (str[left] === str[right]) {
    //         left++
    //         right--
    //     } else {
    //         return false
    //     }
    // }
    // return true
};
// @lc code=end

