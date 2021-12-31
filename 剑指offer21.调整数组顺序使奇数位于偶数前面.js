/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let l = 0, r = nums.length - 1
    while(l < r){
        if(nums[l] % 2 === 1){
            l++
        }else if(nums[r] % 2 === 0){
            r--
        }else{
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
            r--
        }
    }
    return nums
};