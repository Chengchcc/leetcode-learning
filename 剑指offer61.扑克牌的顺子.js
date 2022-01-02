/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    const set = new Set()
    let min = 14, max = 0
    for (const num of nums){
        // 大小王
        if(!num) continue
        if(set.has(num)) return false
        set.add(num)
        min = Math.min(min, num)
        max = Math.max(max, num)
    }
    return max - min < 5
};