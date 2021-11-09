/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (root == null) return []
    // 递归+回溯
    let path = [root.val], result = []
    traverse(root, targetSum, path, result)
    return result;
};

function traverse(root, sum, path, result) {
    if (root.left == null && root.right == null) {
        if (root.val == sum) {
            result.push([...path])
        }
    }
    if (root.left) {
        path.push(root.left.val)
        traverse(root.left, sum - root.val, path, result)
        path.pop()
    }
    if (root.right) {
        path.push(root.right.val)
        traverse(root.right, sum - root.val, path, result)
        path.pop()
    }
}
// @lc code=end

