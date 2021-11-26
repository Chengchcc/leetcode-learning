/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = []
    for (let i = 0; i< s.length; i++){
        if(stack.indexOf(s[i]) === -1){
            while(stack.length && s[i] < stack[stack.length - 1] && s.indexOf(stack[stack.length - 1], i) > 0){
                // 如果当前字母比栈顶字母小，并且栈顶字母在当前字母之后还有，则弹出栈顶字母
                stack.pop()
            }
            stack.push(s[i])
        }
    }
    return stack.join('')
};
// @lc code=end

