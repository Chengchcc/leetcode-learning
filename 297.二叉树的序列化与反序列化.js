/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var dfs = function(node, str) {
        if (node) {
            str.push(node.val);
            dfs(node.left, str);
            dfs(node.right, str);
        } else {
            str.push('#');
        }
    }
    var str = [];
    dfs(root, str);
    return str.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var dfs = function(str) {
        if (str[0] === '#') {
            str.shift();
            return null;
        }
        var node = new TreeNode(str.shift());
        node.left = dfs(str);
        node.right = dfs(str);
        return node;
    }
    var str = data.split(',');
    return dfs(str);
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

