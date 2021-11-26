/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const masks = words.map(word => {
        let mask = 0;
        for (let c of word) {
            mask |= 1 << (c.charCodeAt() - 'a'.charCodeAt());
        }
        return mask;
    })

    let max = 0;
    for (let i = 0; i < masks.length; i++) {
        for (let j = i + 1; j < masks.length; j++) {
            if ((masks[i] & masks[j]) === 0) {
                max =  Math.max(words[i].length * words[j].length, max);
            }
        }
    }
    return max
};
// @lc code=end

