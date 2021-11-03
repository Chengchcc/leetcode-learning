/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
    if (head == null) {
        return head;
    }
    let a = head,
        b = head;
    for (let i = 0; i < k; i++) {
        // 不足 k 个，不需要反转，base case
        if (b == null) {
            return head;
        } else {
            b = b.next;
        }
    }
    // 反转前 k 个元素
    let newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);
    return newHead;
};

var reverse = function(head, tail) {
    let prev;
    let p = head
    while(p !== tail) {
        let next = p.next;
        p.next = prev;
        prev = p;
        p = next;
    }
    return prev
}
// @lc code=end

