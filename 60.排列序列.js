/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const nums = [];
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        nums.push(i);
        factorial *= i;
    }
    k--;
    let resStr = '';
    while (nums.length > 0) {
        factorial /= nums.length;
        const index = k / factorial | 0;
        resStr += nums[index];
        nums.splice(index, 1);
        k %= factorial;
    }
    return resStr;
};
// @lc code=end

