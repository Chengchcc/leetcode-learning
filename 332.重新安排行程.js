/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const map = new Map();
    for (const ticket of tickets) {
        if (!map.has(ticket[0])) {
            map.set(ticket[0], []);
        }
        map.get(ticket[0]).push(ticket[1]);
    }
    for (const key of map.keys()) {
        map.set(key, map.get(key).sort());
    }
    var dfs = function(start, result) {
        while (map.has(start) && map.get(start).length) {
            const next = map.get(start).shift();
            dfs(next, result);
        }
        result.push(start);
    };
    var result = [];
    dfs('JFK', result);
    return result.reverse();
}
// @lc code=end

