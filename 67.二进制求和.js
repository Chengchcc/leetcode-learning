/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('')
    b = b.split('')
    let res = ''
    let c = 0
    while (a.length || b.length || c) {
        // 二进制就是逢二进1
        // console.log('c',c)
        // ~~true 1
        // true+1 =2 false+1=1
        // ~~有Math.floor的功能 但比Math.floor强大 ~~null==>0 ~~undefined ==>0
        c += ~~a.pop() + ~~b.pop() // 后面开始
        res = c % 2 + res
        c = c > 1 // 如果c是2继续处理
    }
    return res
};
// @lc code=end

