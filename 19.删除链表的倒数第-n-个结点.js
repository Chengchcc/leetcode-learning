/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p = head,
        q = head

    while(n-- > 0) {
        p = p.next
    }

    if(!p) return head.next

    while(p.next){
        p = p.next
        q = q.next
    }
    q.next = q.next.next

    return head;
};
// @lc code=end

