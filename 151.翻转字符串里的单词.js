/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let list = [], str = '', resStr = ''
    s += ' '   // 加个空格 防止最后一个不是空格的情况, 确保循环到最后能把最后一个加到数组中, 省得再在下面判断
    for (let i = 0; i < s.length; i++) {
        if(s[i] !== ' '){
            str+=s[i]
        }else {
            if(str){
                list.push(str)
            }
            str = ''
        }
    }
    for (let j = list.length - 1; j >= 0; j--) {
        resStr += j !== 0 ? list[j] + ' ' : list[j]
    }
    return resStr
};
// @lc code=end

