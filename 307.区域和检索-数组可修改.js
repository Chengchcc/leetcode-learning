/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start

var BinaryIndexedTree = function(nums) {
    const len = nums.length;
    const arr = new Array(len*2).fill(0);
    for (let i = 0; i < len; i++) {
        arr[i+len] = nums[i];
    }
    for (let i = len-1; i > 0; i--) {
        arr[i] = arr[i*2] + arr[i*2+1];
    }
    this.arr = arr
}

BinaryIndexedTree.prototype.update = function(index, val) {
    const len = this.arr.length / 2;
    let pos = len + index;
    this.arr[pos] = val;
    while(pos > 0 ){
        let left = pos, right = pos;
        if(pos % 2 === 0){
            right = pos + 1;
        }else{
            left = pos - 1;
        }
        pos = Math.floor(pos/2);
        this.arr[pos] = this.arr[left] + this.arr[right];
    }
}

BinaryIndexedTree.prototype.sumRange = function(left, right) {
    let len = this.arr.length / 2;
    let sum = 0;
    left+=len;
    right+=len;
    while(left <= right){
        if(left % 2 === 1){
            sum += this.arr[left];
            left++;
        }
        if(right % 2 === 0){
            sum += this.arr[right];
            right--;
        }
        left = Math.floor(left/2);
        right = Math.floor(right/2);
    }
    return sum;
}


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.bit = new BinaryIndexedTree(nums);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.bit.update(index, val);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.bit.sumRange(left, right);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

