/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length < numRows || numRows == 1)
        return s;
    const rows = Array(numRows).fill('')
    let loc =  0, down = false
    for (const char of s ){
        rows[loc] +=char
        if(loc === 0 || loc === numRows - 1){
            down = !down
        }
        loc+=down?1:-1
    }
    const ans = rows.join('')
    return ans

};
// @lc code=end

