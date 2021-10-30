/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    // 双指针
    let l = 0, r = arr.length -1;
    while (arr[l] < arr[l + 1]) l++
    if (arr[l] === arr[l + 1]) return false
    while (arr[r] < arr[r - 1]) r--
    return l && l !== arr.length - 1 && l === r
};
// @lc code=end

