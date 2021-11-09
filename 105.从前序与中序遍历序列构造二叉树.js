/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    //当preorder和inorder均为空的时候说明已经到了空节点
    if (!preorder.length || !inorder.length) return null;

    //创建根节点 -> preorder[0]
    let node = new TreeNode(preorder[0]);

    //找到preoder[0]对应inorder中的位置
    let index = inorder.indexOf(preorder.shift());

    //左右子树递归
    node.left = buildTree(preorder, inorder.slice(0, index));
    node.right = buildTree(preorder, inorder.slice(index + 1));

    //返回根节点
    return node;
};
// @lc code=end

