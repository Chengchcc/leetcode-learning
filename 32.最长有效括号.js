/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [], maxLen = 0;
    stack.push(-1);
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            stack.push(i)
        } else {
            stack.pop();        // 栈顶的左括号被匹配，出栈
            if (stack.length) { // 栈未空
                const curMaxLen = i - stack[stack.length - 1]; // 计算有效连续长度
                maxLen = Math.max(maxLen, curMaxLen);          // 挑战最大值
            } else {            // 栈空了
                stack.push(i);    // 入栈充当参照
            }
        }
    }
    return maxLen;
};
// @lc code=end

