/*
 * @lc app=leetcode.cn id=282 lang=javascript
 *
 * [282] 给表达式添加运算符
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    let path = [], ans = [];
    const backTrack = (num0, val, pre, k) => {
        if (num0.length < 1) {
            if (val === target) {
                ans.push(path.slice(0, k).join(''));
            }
            return;
        }
        for (let i = 0; i < num0.length; i++) {
            if (k === 0) {
                path[k] = num0.slice(0, i + 1);
                const currVal = parseInt(path[k]);
                backTrack(num0.slice(i + 1), currVal, currVal, k + 1);
            } else {
                path[k] = '+';
                path[k + 1] = num0.slice(0, i + 1);
                const currVal = Number(path[k+1])
                backTrack(num0.slice(i + 1), val + currVal, currVal, k + 2);
                path[k] = '-';
                backTrack(num0.slice(i + 1), val - currVal, -currVal, k + 2);
                path[k] = '*';
                // 乘法优先级高， 减去前一个结果， 再乘以当前数字
                backTrack(num0.slice(i + 1), val - pre + pre * currVal, pre * currVal, k + 2);
            }
            if (num0[0] === '0') break;
        }
    };
    backTrack(num, 0, 0, 0);
    return ans;
};
// @lc code=end

