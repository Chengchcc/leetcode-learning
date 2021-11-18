/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
var BSTIterator = function(root) {
    const inoderTraversal  = (node, arr) => {
        if(node === null) return;
        inoderTraversal(node.left, arr);
        arr.push(node.val);
        inoderTraversal(node.right, arr);
    }
    this.arr = [];
    this.cur = 0
    inoderTraversal(root, this.arr);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.arr[this.cur++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.cur < this.arr.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

