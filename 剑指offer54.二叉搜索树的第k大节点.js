/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
   let count = 0;
    let result = 0;
    let helper = function (root) {
        if (root == null) {
            return;
        }
        helper(root.right);
        count++;
        if (count === k) {
            result = root.val;
        }
        helper(root.left);
    }
    helper(root);
    return result;

};