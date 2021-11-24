/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    var isValid = function(s) {
        if(s==="") return true;
        let count = 0
        for (const c of s){
            if (c === '(') count++
            if (c === ')') count--
            if (count < 0) return false
        }
        return count === 0
    }

    const res = []
    var dfs = function(s, left, lremove, rremove) {
        if(lremove === 0 && rremove === 0 && isValid(s)) {
            res.push(s)
            return
        }
        for (let i = left; i < s.length; i++) {
            // 去重
            if (i !== left && s[i] === s[i-1]) continue

            if(lremove + rremove > s.length -i ) return
            if (s[i] === '(' && lremove > 0) {
                dfs(s.slice(0, i) + s.slice(i + 1), i, lremove - 1, rremove)
            }
            if (s[i] === ')' && rremove > 0) {
                dfs(s.slice(0, i) + s.slice(i + 1), i, lremove, rremove - 1)
            }

        }

    }

    let lremove = 0; // 左括号剩余数量
    let rremove = 0; // 右括号剩余数量

    for (const c of s) {
        if (c === '(') {
            lremove++;
        } else if (c === ')') {
            if (lremove === 0) {
                rremove++;
            } else {
                lremove--;
            }
        }
    }

    dfs(s, 0, lremove, rremove)
    return res
};
// @lc code=end

