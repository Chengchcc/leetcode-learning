/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const arr = [];
    let p;
    // 将链表的连接断开
    // 并将链表节点存入数组
    while (head) {
        p = head.next;
        head.next = null;
        arr.push(head);
        head = p;
    }
    // 定义左右指针
    let [left, right] = [0, arr.length - 1];
    while (left < right) {
        arr[left].next = arr[right];
        // 防止中间的两个节点成环，加一个判断
        if (left + 1 !== right) arr[right].next = arr[left + 1];
        left++;
        right--;
    }
    return arr[0];
};
// @lc code=end

