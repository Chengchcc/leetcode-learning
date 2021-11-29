/*
 * @lc app=leetcode.cn id=327 lang=javascript
 *
 * [327] 区间和的个数
 */

// @lc code=start
var BIT = function (size) {
    this.size = size;
    this.tree = new Array(size + 1).fill(0);
};

BIT.prototype.update = function (index, val) {
    while (index <= this.size) {
        this.tree[index] += val;
        index += index & -index;
    }
};

BIT.prototype.sumRange = function (index) {
    var sum = 0;
    while (index > 0) {
        sum += this.tree[index];
        index -= index & -index;
    }
    return sum;
};



// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
    // sum[j] - sum[i] < [lower, upper]  (j > i) ==> sum[i] < [sum[j]-upper,sum[j]-lower]
    // 计算前缀和数组
    const prefixSum = Array(nums.length + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i]
    }
    // 准备离散化的数据
    let mapValues = []
    for (const sum of prefixSum) {
        // sum - lower, sum - upper 也要进行处理
        mapValues.push(sum, sum - lower, sum - upper)
    }
    // 没有其它语言现成的 TreeSet 之类的数据结构，简单处理一下……
    const set = [...new Set(mapValues.sort((a, b) => a - b))]
    const map = new Map()
    for (const [key, value] of set.entries()) {
        map.set(value, key + 1)
    }

    // 准备工作结束，正式开始
    const bit = new BIT(map.size)
    let result = 0
    for (let i = 0; i < prefixSum.length; i++) {
        const sum = prefixSum[i]
        result += bit.sumRange(map.get(sum - lower)) - bit.sumRange(map.get(sum - upper) - 1)
        bit.update(map.get(sum), 1)
    }
    return result
};
// @lc code=end

