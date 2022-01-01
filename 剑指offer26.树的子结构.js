/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (A === null || B === null) {
        return false;
    }
    return isSubStructureCore(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

var isSubStructureCore = function (A, B) {
    if (B === null) {
        return true;
    }
    if (A === null) {
        return false;
    }
    if (A.val !== B.val) {
        return false;
    }
    return isSubStructureCore(A.left, B.left) && isSubStructureCore(A.right, B.right);
}