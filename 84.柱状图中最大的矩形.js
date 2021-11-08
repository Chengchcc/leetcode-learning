/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0, ...heights, 0]
    const len = heights.length;
    for (let i = 0; i < len; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (!stack.length) {
                break;
            }
            maxArea = Math.max(               // 计算面积，并挑战最大面积
                maxArea,                        // 计算出栈的bar形成的长方形面积
                heights[top] * (i - stack[stack.length - 1] - 1)
            )
        }
        stack.push(i);
    }
    return maxArea;
};
// @lc code=end

