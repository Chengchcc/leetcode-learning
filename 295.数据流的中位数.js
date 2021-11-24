/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
var Heap = function(compareFn) {
    this.heap = [];
    this.compareFn = compareFn;
}
Heap.prototype.siftUp = function(index) {
    let parent = Math.floor((index - 1) / 2);
    while (parent >= 0 && this.compareFn(this.heap[parent], this.heap[index]) > 0) {
        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
        parent = Math.floor((index - 1) / 2);
    }
}

Heap.prototype.siftDown = function(index) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let min = index;
    if (left < this.heap.length && this.compareFn(this.heap[left], this.heap[min]) < 0) {
        min = left;
    }
    if (right < this.heap.length && this.compareFn(this.heap[right], this.heap[min]) < 0) {
        min = right;
    }
    if (min !== index) {
        [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
        this.siftDown(min);
    }
}

Heap.prototype.push = function(item) {
    this.heap.push(item);
    this.siftUp(this.heap.length - 1);
}

Heap.prototype.pop = function() {
    let item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.siftDown(0);
    return item;
}

Heap.prototype.peek = function() {
    return this.heap[0];
}

Heap.prototype.size = function() {
    return this.heap.length;
}


var MedianFinder = function() {
    this.minHeap = new Heap((a, b) => a - b);
    this.maxHeap = new Heap((a, b) => b - a);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const peek = this.maxHeap.peek();
    if(!peek || num < peek) {
        this.maxHeap.push(num);
    } else {
        this.minHeap.push(num);
    }
    if(this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.push(this.maxHeap.pop());
    } else if(this.minHeap.size() > this.maxHeap.size() + 1) {
        this.maxHeap.push(this.minHeap.pop());
    }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
   if(this.maxHeap.size() === this.minHeap.size()) {
       return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
   }else if (this.maxHeap.size() > this.minHeap.size()) {
       return this.maxHeap.peek();
   } else {
         return this.minHeap.peek();
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

