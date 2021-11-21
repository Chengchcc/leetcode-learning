/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let sign = [1]; // 用于记录符号

    let res = 0, num = 0, op = 1; //起始符号默认为正
    for (let ch of s) {
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + (ch - '0');
            continue; // 多位数时，取出完整的数值
        }
        res += op * num; //遇到非数字，将计算一下到目前为止 结果res为多少
        num = 0;

        if (ch == '+') op = sign.slice(-1)[0]; //确定当前计算时，应该采用的符号
        else if (ch == '-') op = -sign.slice(-1)[0];
        else if (ch == '(') sign.push(op); //遇到（ ，把左括号之前的符号置于栈sign
        else if (ch == ')') sign.pop();  // 退出括号，弹出sign栈顶元素
    }
    res += op * num; //计算最后一个数
    return res;
};
// @lc code=end

