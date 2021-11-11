/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    // O(n^2)
    let max = 1;
    for (let i = 0; i < points.length; i++) {
        let map = new Map();
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue
            let k = (points[i][1] - points[j][1]) / (points[i][0] - points[j][0])
            map.set(k, map.has(k) ? map.get(k) + 1 : 2);
        }
        for (let val of map.values()) {
            max = Math.max(max, val);
        }
    }
    return max;
};
// @lc code=end

