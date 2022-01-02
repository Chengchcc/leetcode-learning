/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.maxHeap = new Heap();
    this.minHeap = new Heap((a, b) => b - a);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if(this.maxHeap.size !== this.minHeap.size){
        this.maxHeap.push(num)
        this.minHeap.push(this.maxHeap.pop())
    }else {
        this.minHeap.push(num)
        this.maxHeap.push(this.minHeap.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.maxHeap.size === this.minHeap.size) {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    } else {
        return this.maxHeap.peek();
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

function Heap(compareFn) {
  this.data = [];
  this.compareFn =
    compareFn ||
    function (a, b) {
      return a - b;
    };
  this.size = 0;
}

Heap.prototype.peek = function () {
    return this.data[0];
};

Heap.prototype.push = function (item) {
  this.data.push(item);
  this.size++;
  this.siftUp(this.size - 1);
};
Heap.prototype.pop = function () {
  if (this.size === 0) {
    return null;
  }
  let result = this.data[0];
  this.data[0] = this.data[this.size - 1];
  this.data.pop();
  this.size--;
  this.siftDown(0);
  return result;
};
Heap.prototype.siftUp = function (index) {
  let parent = Math.floor((index - 1) / 2);
  while (index > 0 && this.compareFn(this.data[index], this.data[parent]) < 0) {
    [this.data[index], this.data[parent]] = [
      this.data[parent],
      this.data[index],
    ];
    index = parent;
    parent = Math.floor((index - 1) / 2);
  }
};
Heap.prototype.siftDown = function (index) {
  let left = 2 * index + 1;
  let right = 2 * index + 2;
  let min = index;
  if (left < this.size && this.compareFn(this.data[left], this.data[min]) < 0) {
    min = left;
  }
  if (
    right < this.size &&
    this.compareFn(this.data[right], this.data[min]) < 0
  ) {
    min = right;
  }
  if (min !== index) {
    [this.data[index], this.data[min]] = [this.data[min], this.data[index]];
    this.siftDown(min);
  }
};
