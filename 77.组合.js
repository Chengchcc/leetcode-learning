/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = []
    var backtracking = function(arr, idx){
        if(arr.length === k){
            ans.push(arr.slice())
            return
        }else {
            for(let  i =idx; i<=n; i++){
                if (arr.length && arr[arr.length - 1] >= i) { continue }
                arr.push(i)
                backtracking(arr, idx+1)
                arr.pop()
            }
        }
    }
    backtracking([], 1)
    return ans
};
// @lc code=end

