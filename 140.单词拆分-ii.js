/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            if (i >= wordDict[j].length) {
                if (s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
                    dp[i] = true
                }
            }
        }
    }

    if (!dp[s.length])
        return []

    const res = []
    const backtracking = (s, tmp) =>{
        if (s.length == 0) {
            res.push(tmp.trim())
            return
        }
        for (var i = 0; i < wordDict.length; i++) {
            if (s.startsWith(wordDict[i]))
                backtracking(s.slice(wordDict[i].length), tmp + " " + wordDict[i])
        }
    }
    backtracking(s, '')
    return res
};
// @lc code=end

