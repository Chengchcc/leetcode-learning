/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0, r =numbers.length -1;
    while(l<r){
        const res = numbers[l] + numbers[r];
        if(res<target){
            l++;
        }else if(res>target){
            r--;
        }else {
            return [++l, ++r]
        }
    }
    return []
};
// @lc code=end

