/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);
    let i =0;
    while(i<v1.length || i<v2.length){
        const x = v1[i] || 0;
        const y = v2[i] || 0;
        if(x>y){
            return 1
        }else if(x< y){
            return -1
        }
        i++
    }
    return 0
};
// @lc code=end

