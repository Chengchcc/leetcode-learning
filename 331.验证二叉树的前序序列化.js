/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let arr =preorder.split(',');
    let n = arr.length;
    let i = 0;
    let slots = 1;
    while(i<n){
        if(slots === 0){
            return false
        }
        if (arr[i] === '#'){
            slots--;
            i++
        } else {
            ++slots
            i++
        }
    }
    return slots === 0
};
// @lc code=end

