/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (root === null) {
        return null;
    }

    let head = new Node(0, null, null);
    let pre = null;
    var dfs = function (root) {
        if (root === null) {
            return;
        }
        dfs(root.left);
        if (pre === null) {
            head.right = root;
        }
        else {
            pre.right = root;
        }
        root.left = pre;
        pre = root;
        dfs(root.right);
    }
    dfs(root);
    head.right.left = pre;
    pre.right = head.right;
    return head.right;
    
};