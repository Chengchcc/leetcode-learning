/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    var build = function (preorder, inorder) {
        if (preorder.length == 0) return null
        let root = new TreeNode(preorder[0])
        let index = inorder.indexOf(root.val)
        root.left = build(preorder.slice(1, index + 1), inorder.slice(0, index))
        root.right = build(preorder.slice(index + 1), inorder.slice(index + 1))
        return root
    }
    return build(preorder, inorder)

};