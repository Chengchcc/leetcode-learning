/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l =0, r=height.length -1, area = 0;
    while(l<r){
        const minHeight = Math.min(height[l], height[r]);
        const curr = (r-l) * minHeight
        area = Math.max(curr, area)
        if(minHeight === height[l]){
            l++
        }else {
            r--
        }
    }
    return area

};
// @lc code=end

