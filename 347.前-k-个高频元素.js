/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
var Heap = function(compareFn) {
    this.data = [];
    this.compareFn = compareFn;
}

Heap.prototype.push = function(item) {
    this.data.push(item);
    this.siftUp(this.data.length - 1);
}

Heap.prototype.siftUp = function(index) {
    if (index === 0) return;
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.compareFn(this.data[parentIndex], this.data[index]) > 0) {
        [this.data[parentIndex], this.data[index]] = [this.data[index], this.data[parentIndex]];
        this.siftUp(parentIndex);
    }
}

Heap.prototype.pop = function() {
    if (this.data.length === 0) return null;
    if (this.data.length === 1) return this.data.pop();
    let top = this.data[0];
    this.data[0] = this.data.pop();
    this.siftDown(0);
    return top;
}

Heap.prototype.siftDown = function(index) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let minIndex = index;
    if (left < this.data.length && this.compareFn(this.data[left], this.data[minIndex]) < 0) {
        minIndex = left;
    }
    if (right < this.data.length && this.compareFn(this.data[right], this.data[minIndex]) < 0) {
        minIndex = right;
    }
    if (minIndex !== index) {
        [this.data[index], this.data[minIndex]] = [this.data[minIndex], this.data[index]];
        this.siftDown(minIndex);
    }
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const heap = new Heap((a, b) => b[1] - a[1]);
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    for (let key in map) {
        heap.push([key, map[key]]);
    }
    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(heap.pop()[0]);
    }
    return res;
};
// @lc code=end

