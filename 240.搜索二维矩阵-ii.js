/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var search = function(row, target){
        let l=0, r=row.length-1
        while(l<=r){
            let mid = Math.floor((l+r)/2)
            if(row[mid] === target) return true
            if(row[mid] > target) r = mid-1
            else l = mid+1
        }
        return false
    }

    for(const row of matrix){
        if(search(row, target)) return true
    }
    return false
};
// @lc code=end

