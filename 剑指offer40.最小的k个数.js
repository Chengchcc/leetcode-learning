/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    let heap = new Heap(function(a, b){
        return a - b
    })
    for(let i = 0; i < arr.length; i++){
        heap.push(arr[i])
    }
    let result = []
    for(let i = 0; i < k; i++){
        result.push(heap.pop())
    }
    return result
};

function Heap(compareFn){
    this.data = []
    this.compareFn = compareFn || function(a, b){
        return a - b
    }
    this.size = 0
}

Heap.prototype.push = function(item){
    this.data.push(item)
    this.size++
    this.siftUp(this.size - 1)
}
Heap.prototype.pop = function(){
    if(this.size === 0){
        return null
    }
    let result = this.data[0]
    this.data[0] = this.data[this.size - 1]
    this.data.pop()
    this.size--
    this.siftDown(0)
    return result
}
Heap.prototype.siftUp = function(index){
    let parent = Math.floor((index - 1) / 2)
    while(index > 0 && this.compareFn(this.data[index], this.data[parent]) < 0){
        [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]]
        index = parent
        parent = Math.floor((index - 1) / 2)
    }
}
Heap.prototype.siftDown = function(index){
    let left = 2 * index + 1
    let right = 2 * index + 2
    let min = index
    if(left < this.size && this.compareFn(this.data[left], this.data[min]) < 0){
        min = left
    }
    if(right < this.size && this.compareFn(this.data[right], this.data[min]) < 0){
        min = right
    }
    if(min !== index){
        [this.data[index], this.data[min]] = [this.data[min], this.data[index]]
        this.siftDown(min)
    }
}