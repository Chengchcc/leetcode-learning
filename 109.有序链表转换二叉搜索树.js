/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null;
    return buildBST(head, null)
};
const buildBST = (head, tail) => {
    if (head === tail) return null
    let fast = head, slow = head
    while (fast !== tail) {
        fast = fast.next
        if (fast !== tail) {
            fast = fast.next
            slow = slow.next
        }
    }

    return new TreeNode(slow.val, buildBST(head, slow), buildBST(slow2.next, tail))
}
// @lc code=end

