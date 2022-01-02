/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    var helper = function (nums, start, end) {
        if (start >= end) {
            return 0;
        }
        var mid = Math.floor((start + end) / 2);
        var left = helper(nums, start, mid);
        var right = helper(nums, mid + 1, end);
        var count = merge(nums, start, mid, end);
        return left + right + count;
    }
    var merge = function (nums, start, mid, end) {
        var count = 0;
        var i = start;
        var j = mid + 1;
        var temp = [];
        while (i <= mid && j <= end) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i++]);
            } else {
                temp.push(nums[j++]);
                count += mid - i + 1;
            }
        }
        while (i <= mid) {
            temp.push(nums[i++]);
        }
        while (j <= end) {
            temp.push(nums[j++]);
        }
        for (var k = start; k <= end; k++) {
            nums[k] = temp[k - start];
        }
        return count;
    }
    return helper(nums, 0, nums.length - 1);
};