/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length < 4) return [];
    let res = [], len = nums.length;
    nums.sort((a, b) => a - b);
    for(let j = 0; j < len - 3; j++) {
        if(j > 0 && nums[j] === nums[j - 1]) continue;
        for(let k = j + 1; k < len - 2; k++) {
            if(k > j + 1 && nums[k] === nums[k - 1]) continue;
            let l = k + 1, r = len - 1;
            while(l < r) {
                let sum = nums[j] + nums[k] + nums[l] + nums[r];
                if(sum === target) {
                    res.push([nums[j], nums[k], nums[l], nums[r]]);
                    l++;
                    r--;
                    while(l < r && nums[l] === nums[l - 1]) l++;
                    while(l < r && nums[r] === nums[r + 1]) r--;
                } else if(sum < target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
    }
    return res
};

// @lc code=end

