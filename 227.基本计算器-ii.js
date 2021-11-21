/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // 符号位
    let sign = '+'
    // 数值栈
    let arr = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            // 过滤空格字符
        } else if (s[i] < '0') {
            // +-*/的ascii码都小于数字
            sign = s[i]
        } else {
            let str = ''
            while (i < s.length && s[i] >= '0') {// 加减乘除和空格的都ascii都小于数字
                str += s[i]
                i++
            }
            i-- // 上面的循环多了一次++ 在这里减掉
            str = Number(str) // 转Number
            if (sign === '+') arr.push(str)
            if (sign === '-') arr.push(str * -1)
            if (sign === '*') arr.push(arr.pop() * str)
            if (sign === '/') arr.push(Math.trunc(arr.pop() / str))
        }
    }
    return arr.reduce((acc, curr) => acc + curr, 0)
};
// @lc code=end

