/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start

var BinaryIndexedTree = function(len) {
    this.tree = new Array(len + 1).fill(0);
}

BinaryIndexedTree.prototype.insert = function(index, value) {
    while (index < this.tree.length) {
        this.tree[index] += value;
        index += index & -index;
    }
}

BinaryIndexedTree.prototype.sum = function(index) {
    let sum = 0;
    while (index > 0) {
        sum += this.tree[index];
        index -= index & -index;
    }
    return sum;
}


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {

    const set = [...new Set(nums)].sort((a, b) => a - b)
    const map = new Map()
    for (const [key, value] of set.entries()) {
        map.set(value, key + 1)
    }
    console.log(map)

    let result = [];
    let tree = new BinaryIndexedTree(map.size);
    for (let i = nums.length - 1; i >= 0; i--) {
        const realValue = nums[i]
        const discretizedValue = map.get(realValue)
        result.unshift(tree.sum(discretizedValue - 1));
        tree.insert(discretizedValue, 1);
    }
    return result;
};
// @lc code=end

