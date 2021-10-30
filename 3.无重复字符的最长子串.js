/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0, r = 0, ret = new Set(), max = 0
    while(l<s.length){
        while(r<s.length && !ret.has(s[r])){
            ret.add(s[r])
            r++
        }
        max = Math.max(max, r-l)
        ret.delete(s[l])
        l++
    }
    return max
};
// @lc code=end

