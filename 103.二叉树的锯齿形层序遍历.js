/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const ret = [];
    if (!root) {
        return ret;
    }

    const q = [];
    q.push(root);
    let isOrderLeft = true;
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            if (isOrderLeft) {
                ret[ret.length - 1].push(node.val);
            } else {
                ret[ret.length - 1].unshift(node.val);
            }
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        isOrderLeft = !isOrderLeft;
    }

    return ret;
};
// @lc code=end

