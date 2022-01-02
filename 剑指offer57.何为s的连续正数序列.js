/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    let l = 1, r = 2, sum = 3, res = []
    while (l < r) {
        if (sum === target) {
            let ans = []
            for (let i = l; i <= r; ++i) {
               ans[i - l] = i
            }
            res.push(ans)
            sum -= l
            l++
        } else if (sum < target) {
            r++
            sum += r
        } else {
            sum -= l
            l++
        }
    }
    return res
};