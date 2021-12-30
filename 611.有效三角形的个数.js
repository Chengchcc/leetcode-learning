/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = 0, n = nums.length;
    for (let i = 0; i < n; i++) {
        for(let j = i+1; j< n-1; j++){
            let k = j+1
            while(k< n && nums[k] < nums[i] + nums[j]){
                k++
            }
            ans += Math.max(k-j-1, 0)
        }
    }
    return ans
};
// @lc code=end

