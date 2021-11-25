/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {

    if(num.length === 0) return false;
    let len = num.length;

    for (let i = 1; i <= len / 2; i++) { // 第一个数的长度不能超过数字的一半
        if(num[0] === '0' && i > 1) break; // 如果第一个数是0，并且长度大于1，则跳出循环
        for (let j = i + 1; j <= i + len/2; j++) {
            if(num[i] === '0' && j>i+1) break; // 如果第二个数是0，并且长度大于1，则跳出循环
            let first = Number(num.slice(0, i));
            let second = Number(num.slice(i, j));
            let rest = num.slice(j);
            while(rest.startsWith(first + second + '')){
                let tmp = first
                first = second;
                second = tmp + second;
                rest = rest.slice((second+'').length)
                if(rest.length === 0) return true;
            }
        }
    }
    return false
};
// @lc code=end

