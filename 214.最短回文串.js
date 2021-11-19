/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    const getNext = (str, next=[])=>{
        let i=1,j=0
        next[0] = 0
        while(i < str.length){
            if(str[i] === str[j] || j ==0){
                j++
                i++
                next[i] = j
            }else{
                j = next[j]
            }
       }
       return next
    }
    const rev_s = s.split('').reverse().join('');
    const str = s + "#" + rev_s;
    const next = new Array(str.length).fill(0);
    const maxLen = getNext(str, next)[str.length]
    const add = s.substring(maxLen).split('').reverse().join('');
    return add + s;
};
// @lc code=end

