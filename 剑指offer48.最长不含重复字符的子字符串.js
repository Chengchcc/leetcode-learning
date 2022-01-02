/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let max = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            start = Math.max(start, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        max = Math.max(max, i - start + 1);
    }
    return max;
};