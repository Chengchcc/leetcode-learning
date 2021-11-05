/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        //遍历一次数组 把>=1的和<=数组大小的值 放到原数组对应位置 用while保证置换后，新换过来的数有机会再换走~
        while (nums[i] !== nums[nums[i] - 1] && nums[i] >= 1 && nums[i] <= nums.length) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }

    }
    for (let i = 0; i < nums.length; i++) { //然后再遍历一次数组查当前值是否和(下标+1)对应
        if (nums[i] !== i + 1) return i + 1; //如果不对应那这个(下标+1)就是缺失的正数
    }
    return nums.length + 1; //否则遍历完都没出现 则缺失的正数就是数组长度加1

};
// @lc code=end

