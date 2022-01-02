/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {

    let str = nums.map(item => item.toString()).sort((a, b) => `${a}${b}` - `${b}${a}`).join('');
    return str;
};