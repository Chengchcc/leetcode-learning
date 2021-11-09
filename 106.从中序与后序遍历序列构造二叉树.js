/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    //当preorder和inorder均为空的时候说明已经到了空节点
    if (!postorder.length || !inorder.length) return null;

    //创建根节点 -> postorder[postorder.length -1 ]
    let node = new TreeNode(postorder[postorder.length -1]);

    //找到preoder[0]对应inorder中的位置
    let index = inorder.indexOf(postorder.pop());

    //左右子树递归
    node.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
    node.right = buildTree(inorder.slice(index + 1), postorder.slice(index));

    //返回根节点
    return node;
};
// @lc code=end

