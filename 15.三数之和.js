/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 排序+双指针
    const len = nums.length
    if(len<3) return []
    nums.sort((a,b)=>a-b)
    const ans = []
    for(let i = 0; i < len - 2; i++) {
        if(nums[i] > 0 ) break
        // 去重
        if(i>0 && nums[i] === nums[i-1]) continue
        let l = i+1, r = len - 1
        while(l<r){
            const sum = nums[i] + nums[l] + nums[r]
            if(sum < 0) l++
            else if(sum > 0) r--
            else {
                ans.push([nums[i], nums[l], nums[r]])
                while (l < r && nums[l] === nums[++l]);
                while (l < r && nums[r] === nums[--r]);
            }
        }
    }
    return ans
};

// @lc code=end

