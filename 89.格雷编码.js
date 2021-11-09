/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const res = []
    var backtracking = function(tmp, nums){
        if(tmp.length === n){
            res.push(parseInt(tmp.join(''), 2))
            return
        }
        tmp.push(nums[0])
        backtracking(tmp, [0, 1])
        tmp.pop()
        tmp.push(nums[1])
        backtracking(tmp, [1, 0])
        tmp.pop()
    }

    backtracking([], [0,1])
    return res
};
// @lc code=end

