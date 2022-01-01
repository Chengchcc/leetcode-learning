/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack =[];
    this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    if (this.minStack.length === 0) {
        this.minStack.push(x)
    }else {
        if (x <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(x)
        }
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let x = this.stack.pop()
    if (x === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
    }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let x = this.stack[this.stack.length - 1]
    return x
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    if(this.minStack.length === 0){
        return null
    }
    let x = this.minStack[this.minStack.length - 1]
    return x
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */