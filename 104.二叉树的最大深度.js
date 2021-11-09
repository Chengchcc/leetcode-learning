/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    let maxDepth = 0
    const dfs = (node, depth)=>{
        if(node === null){
            maxDepth = Math.max(depth, maxDepth)
            return
        }
        dfs(node.left, depth+1)
        dfs(node.right, depth+1)
    }
    dfs(root, 0)
    return maxDepth
};
// @lc code=end

