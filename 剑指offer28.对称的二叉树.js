/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }
    return isSymmetricCore(root.left, root.right);
};

var isSymmetricCore = function (left, right) {
    if (left === null && right === null) {
        return true;
    }
    if (left === null || right === null) {
        return false;
    }
    if (left.val !== right.val) {
        return false;
    }
    return isSymmetricCore(left.left, right.right) && isSymmetricCore(left.right, right.left);
}