/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!(head && head.next)) return head

    // 所有节点数量
    let n = 1
    let p = head
    while (p.next) {
        p = p.next
        n++
    }
    // 将节点围成圈
    p.next = head

    // 先去除重复旋转的次数，然后获取没有变动节点的数量
    k %= n, k = n - k
    while (k--) {
        p = p.next
    }
    // 将head变为最后一个向右移动的节点
    head = p.next
    // 找到最后要断节点的左边一个节点（旋转后的最后节点），将指向置空
    p.next = null

    return head
};
// @lc code=end

