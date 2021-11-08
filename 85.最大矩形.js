/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length == 0) return 0;

    let res = 0;
    let heights = new Array(matrix[0].length + 1).fill(0); // 开辟空间多添一项0 避免原高度最后一直递增 无法有机会计算
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {  //每一层 高度会有变化：可能继续增1， 可能直接归零
            if (matrix[row][col] == '1') heights[col] += 1;
            else heights[col] = 0;
        }// 求出每一层的 heights[] 然后传给84题的函数👇
        res = Math.max(res, largestRectangleArea(heights)); // 每一层 更新一下最大矩形面积
    }
    return res;
};

var largestRectangleArea = function (heights) {
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

