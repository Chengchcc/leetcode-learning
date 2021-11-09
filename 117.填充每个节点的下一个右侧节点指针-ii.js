/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return root;
    }

    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            // 连接
            if (i < currentLevelSize) {
                node.next = q[0];
            }
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
    return root
};
// @lc code=end

