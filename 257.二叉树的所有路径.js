/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const dfs = (root, path) => {
        if(!root) {
            return []
        }
        if(!root.left && !root.right) {
            return [path + root.val]
        }
        const left = dfs(root.left, path + root.val + '->');
        const right = dfs(root.right, path + root.val + '->');
        return left.concat(right)
    }
    return dfs(root, '')
};
// @lc code=end

