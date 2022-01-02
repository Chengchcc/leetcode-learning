/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if(k == 0) return []
    if(k == 1) return nums
    let res = []
    let deque = []
    for(let i = 0; i < nums.length; i++){
        while(deque.length && deque[0] < i - k + 1){
            deque.shift()
        }
        while(deque.length && nums[deque[deque.length - 1]] < nums[i]){
            deque.pop()
        }
        deque.push(i)
        if(i >= k - 1) res.push(nums[deque[0]])
    }
    return res
};

