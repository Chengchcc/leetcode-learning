/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    let res = [];
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] === '+' || expression[i] === '-' || expression[i] === '*') {
            let left = diffWaysToCompute(expression.substring(0, i));
            let right = diffWaysToCompute(expression.substring(i + 1));
            for(let j = 0; j < left.length; j++) {
                for(let k = 0; k < right.length; k++) {
                    if(expression[i] === '+') {
                        res.push(left[j] + right[k]);
                    } else if(expression[i] === '-') {
                        res.push(left[j] - right[k]);
                    } else {
                        res.push(left[j] * right[k]);
                    }
                }
            }
        }
    }
    if (res.length === 0) {
        res.push(parseInt(expression));
    }
    return res
};
// @lc code=end

