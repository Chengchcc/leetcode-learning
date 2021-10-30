/*
 * @lc app=leetcode.cn id=1961 lang=javascript
 *
 * [1961] 检查字符串是否为数组前缀
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let ret = ''
    for(let i = 0; i < words.length; i++){
        ret+=words[i]
        if(ret === s){
            return true
        }
    }
    return false
};
// @lc code=end

