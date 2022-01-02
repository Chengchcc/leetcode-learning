/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
    var res = [];
    var temp = 0;
    for (var i = 0; i < nums.length; i++) {
        temp ^= nums[i];
    }
    // 去最高位的1
    temp &= -temp;
    for (var i = 0; i < nums.length; i++) {
        if ((nums[i] & temp) === 0) {
            res[0] ^= nums[i];
        } else {
            res[1] ^= nums[i];
        }
    }
    return res;
};