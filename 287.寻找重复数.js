/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast){
            let _slow = 0;
            while(_slow !== slow){
                _slow = nums[_slow];
                slow = nums[slow];
            }
            return _slow;
        }
    }
};
// @lc code=end

