/*
 * @lc app=leetcode.cn id=284 lang=javascript
 *
 * [284] 窥探迭代器
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    this.iterator = iterator;
    this.peekVal = undefined
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if(this.peekVal === undefined){
        this.peekVal = this.iterator.next()
    }
    return this.peekVal
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    if(this.peekVal !== undefined){
        let temp = this.peekVal
        this.peekVal = undefined
        return temp
    }
    return this.iterator.next()
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    if(this.peekVal !== undefined){
        return true
    }
    return this.iterator.hasNext()
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end

