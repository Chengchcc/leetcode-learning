/*
 * @lc app=leetcode.cn id=336 lang=javascript
 *
 * [336] 回文对
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        map.set(words[i], i);
    }
    var isPalindrome = function(s) {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    const set = new Set();
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j <= words[i].length; j++) {
            const left = words[i].slice(0, j);
            const right = words[i].slice(j);
            if (isPalindrome(left)) {
                const rightReverse = right.split('').reverse().join('');
                if (map.has(rightReverse) && map.get(rightReverse) !== i) {
                    set.add(`${map.get(rightReverse)} ${i}`);
                }
            }
            if (isPalindrome(right)) {
                const leftReverse = left.split('').reverse().join('');
                if (map.has(leftReverse) && map.get(leftReverse) !== i) {
                    set.add(`${i} ${map.get(leftReverse)}`);
                }
            }
        }
    }
    return Array.from(set).map(x => x.split(' ').map(Number));
};
// @lc code=end

