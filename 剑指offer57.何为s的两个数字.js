/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (map.has(num)) {
            return [nums[map.get(num)], nums[i]]
        }
        map.set(target - num, i)
    }
    return []
};