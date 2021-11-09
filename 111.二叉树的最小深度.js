/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root == null) {
        return 0;
    }
    const left = minDepth(root.left);
    const right = minDepth(root.right);

    if (left > 0 && right > 0) {
        return 1 + Math.min(left, right);
    } else if (left > 0) {
        return 1 + left;
    } else if (right > 0) {
        return 1 + right;
    } else {
        return 1;
    }
};
// @lc code=end

