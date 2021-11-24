/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0, cows = 0;
    let s = secret.split(''), g = guess.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] === g[i]) {
            bulls++;
            s[i] = g[i] = '*';
        }
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < g.length; j++) {
            if (s[i] === g[j] && s[i] !== '*') {
                cows++;
                s[i] = g[j] = '*';
                break;
            }
        }
    }
    return `${bulls}A${cows}B`;
};
// @lc code=end

