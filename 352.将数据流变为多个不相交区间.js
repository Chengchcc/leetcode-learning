/*
 * @lc app=leetcode.cn id=352 lang=javascript
 *
 * [352] 将数据流变为多个不相交区间
 */

// @lc code=start

var SummaryRanges = function() {
    this.intervals = new Set()
    this.rangeMap = {}
};

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
    if (this.rangeMap[val]) return;
    let preVal = val - 1;
    let nextVal = val + 1;

    let preRange = this.rangeMap[preVal]
    let nextRange = this.rangeMap[nextVal]

    // 存在前
    if (preRange && nextRange) {
        preRange[1] = nextRange[1];
        this.rangeMap[val] = preRange;
        for (let i = nextRange[0], len = nextRange[1]; i <= len; i++) {
            this.rangeMap[i] = preRange;
        }
        this.intervals.delete(nextRange)
    } else if (preRange) {
        preRange[1] = val;
        this.rangeMap[val] = preRange;
    } else if (nextRange) {
        nextRange[0] = val;
        this.rangeMap[val] = nextRange;
    } else {
        let newRange = [val, val];
        this.rangeMap[val] = newRange;
        this.intervals.add(newRange)
    }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    let rangeList = Array.from(this.intervals)
    rangeList.sort((a, b) => a[0] - b[0])
    return rangeList
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
// @lc code=end

