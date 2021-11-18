/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 栈方法 降维
    let x = 0
    let m = 0
    for (let n of nums) {
        if (m === 0) x = n  // 栈为空时，入栈
        m += x === n ? 1 : -1 // 与栈顶相同，入栈， 否则出栈
    }
    return x
};
// @lc code=end

