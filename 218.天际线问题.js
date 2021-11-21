/*
 * @lc app=leetcode.cn id=218 lang=javascript
 *
 * [218] 天际线问题
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    let ans = [];
    let event = [];
    //1.先拆分成两个事件,left为出现的时机，right为消失的时机。
    for (let build of buildings) {
        let [left, right, height] = build;
        event.push([left, height]);
        event.push([right, -height]);
    }
    //2. 按照出现消失的时间点进行排序
    event.sort((a, b) => a[0] - b[0]);
    //3. 用map存放高度以及相对的出现次数。
    let h = new Map(); //高度->出现次数, 可以用二叉堆的结构
    for (let i = 0; i < event.length; i++) {
        let [x, y] = event[i];
        if (y > 0) {
            if (!h.has(y)) h.set(y, 0);
            h.set(y, h.get(y) + 1);
        } else { 
            h.set(-y, h.get(-y) - 1);
            if (h.get(-y) == 0) h.delete(-y);
        }
        //x为event最后一个值需要记，x如果不等于下一个
        if (i == event.length - 1 || x != event[i + 1][0]) {
            //选出最大的heigt
            let height = Math.max(...h.keys(), 0);
            let len = ans.length;
            if (len == 0 || height != ans[len - 1][1]) {
                ans.push([x, height]);
            }
        }
    }
    return ans;
};
// @lc code=end

