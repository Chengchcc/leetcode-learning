/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals == null || !intervals.length) {
        return intervals;
    }
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    let result = [];
    let i = 0;
    while (i < intervals.length) {
        // 当前区间
        let cur = [intervals[i][0], intervals[i][1]];
        let j = i + 1;
        // 如果下一个区间的开始位置还要小于等于当前区间的结束位置，则有重叠，
        while (j < intervals.length && intervals[j][0] <= cur[1]) {
            // 合并后的结束位置应该取两个区间结束位置的最大值
            cur[1] = Math.max(cur[1], intervals[j][1]);
            j++;
        }
        result.push(cur);
        i = j;
    }
    return result;
};
// @lc code=end

