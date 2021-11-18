/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    const m = dungeon.length, n = dungeon[0].length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(Infinity));
    dp[m][n - 1] = dp[m - 1][n] = 1; // 到达p点剩余点数
    for (let i = m - 1; i >= 0; --i) {
        for (let j = n - 1; j >= 0; --j) {
            let minn = Math.min(dp[i + 1][j], dp[i][j + 1]);
            dp[i][j] = Math.max(minn - dungeon[i][j], 1);
        }
    }
    return dp[0][0];
};
// @lc code=end

