/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let arr = [], errNode1 = void 0, errNode2 = void 0;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);
        arr.push(node);
        inorder(node.right)
    }
    inorder(root)

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].val > arr[i + 1].val) {
            !errNode1 ? (errNode1 = arr[i], errNode2 = arr[i + 1]) : errNode2 = arr[i + 1];
        }
    }

    let tempVal = errNode1.val;
    errNode1.val = errNode2.val;
    errNode2.val = tempVal;
};
// @lc code=end

