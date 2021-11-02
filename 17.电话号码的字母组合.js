/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const m = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    const digistsM = digits.split('').map(i=>m[i])
    const ans = []
    function dfs(s, height){
        if(!digistsM[height]){
            s && ans.push(s)
            return
        }
        for (let i of digistsM[height]){
            dfs(s+i, height+1)
        }
    }
    dfs('', 0)
    return ans
};
// @lc code=end

