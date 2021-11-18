/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // 计算因子5的个数 count = n / 5 + n / 25 + n/ 125 + ...
    let count = 0;
    while (n > 0) {
        count += (n / 5) >> 0;
        n = n / 5;
    }
    return count;

};
// @lc code=end

