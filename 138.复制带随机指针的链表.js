/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const helper = function (head, cachedNode = new Map()) {
    if (head === null) {
      return null;
    }
    if (!cachedNode.has(head)) {
      cachedNode.set(head, new Node(head.val));
      Object.assign(cachedNode.get(head), {
          next: helper(head.next, cachedNode),
          random: helper(head.random, cachedNode),
      });
    }
    return cachedNode.get(head);
  };
  return helper(head);
};
// @lc code=end
