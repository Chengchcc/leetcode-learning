/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    let top = nums[0]
    let count = 1
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            top = nums[i]
            count = 1
        } else if (top === nums[i]) {
            count++
        } else {
            count--
        }
    }
    return top
};