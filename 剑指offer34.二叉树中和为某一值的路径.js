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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {

    var dfs = function (root, target, result, path) {
        if (root === null) {
            return;
        }
        path.push(root.val);
        if (root.left === null && root.right === null && root.val === target) {
            result.push(path.slice());
        }
        dfs(root.left, target - root.val, result, path);
        dfs(root.right, target - root.val, result, path);
        path.pop();
    }
    let result = [];
    let path = [];
    dfs(root, target, result, path);
    return result;
};