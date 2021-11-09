/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const helper = (node1, node2) => {
        if(node1&&node2){
            return node1.val == node2.val && helper(node1.left, node2.left) && helper(node1.right, node2.right)
        }else if ((node1 && !node2) || (!node1 && node2)) {
            return false
        }else {
            return true
        }
    }
    return helper(p, q)
};
// @lc code=end

