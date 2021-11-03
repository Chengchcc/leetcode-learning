/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (head && head.next) {
        const next = head.next; // 临时保存head.next，因为head.next待会要改变
        head.next = next.next;
        next.next = head;
        prev.next = next;

        prev = head;      // 指针更新
        head = head.next; // 指针更新
    }
    return dummy.next;

};
// @lc code=end

