/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set()
    set.add(n)
    const helper = (n) => {
        const newN = n.toString().split('').reduce((acc, cur) => acc + cur * cur, 0)
        if(newN === 1) {
            return true
        }else {
            return set.has(newN) ? false : set.add(newN) && helper(newN)
        }
    }
    return helper(n)
};
// @lc code=end

