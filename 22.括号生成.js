/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = []
    if(n ==0) return
    function dfs(str, l, r){
        if(l === n && r === n) {
            ans.push(str)
            return
        }
        if(l<n){
            dfs(str+'(', l+1,r)
        }
        if(r<l){
            dfs(str+')', l,r+1)
        }
    }
    dfs("", 0, 0)
    return ans
};
// @lc code=end

