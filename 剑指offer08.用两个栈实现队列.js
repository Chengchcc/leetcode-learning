var CQueue = function () {
    this.innerStack = []
    this.outerStack = []
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.innerStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {

    if(this.outerStack.length == 0){
        while(this.innerStack.length){
            this.outerStack.push(this.innerStack.pop())
        }
    }
    return this.outerStack.pop() || -1
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */