/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let item of s) {
        if (item === '(' || item === '[' || item === '{') {
            stack.push(item);
        } else {
            let last = stack.pop();
            if (item === ')' && last !== '(') {
                return false;
            }
            if (item === ']' && last !== '[') {
                return false;
            }
            if (item === '}' && last !== '{') {
                return false;
            }
        }
    }
    return stack.length === 0;
};
// @lc code=end

