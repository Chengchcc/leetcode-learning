/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 排序 + 双指针
    const len = nums.length
    nums.sort((a, b)=>a-b)
    let ans = nums[0] +　nums[1] + nums[2]
    for(let i = 0; i < len - 2; i++) {
        let l = i+1, r= len - 1
        while(l<r){
            const sums = nums[i] + nums[l] + nums[r]
            if(Math.abs(sums - target) < Math.abs(ans - target)) {
                ans = sums
            }
            if(sums<target) l++
            else r--
        }
    }
    return ans
};
// @lc code=end

