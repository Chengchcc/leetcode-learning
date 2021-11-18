/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let rem = Math.abs(numerator) % Math.abs(denominator);
    let divide = numerator / denominator;
    let sign = true;
    if (divide < 0) {
        sign = false;
        divide = -divide;
    }
    let int = Math.floor(divide);
    if (rem == 0) {
        if (sign) return `${int}`;
        return `-${int}`
    };
    let float = [];
    let remMap = new Map();
    let index = 1;
    while (rem != 0) {
        if (!remMap.has(rem)) {
            remMap.set(rem, index);
        } else {
            float.splice(remMap.get(rem) - 1, 0, '(')
            float.splice(index, 0, ')');
            return (sign ? '' : '-') + int + '.' + float.join('');
        }
        rem *= 10;
        index++;
        if (rem < denominator) {
            float.push(0);
            continue;
        }
        float.push(Math.floor(rem / Math.abs(denominator)));
        rem = rem % Math.abs(denominator)
    }
    return (sign ? '': '-') + int + '.' + float.join('')
};
// @lc code=end

