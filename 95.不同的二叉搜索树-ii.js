/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    const help = (l, r)=> {
        if(l>r) return [null]
        const res = []
        for(let i = l; i <=r; i++) {
            const lTree = help(l, i-1)
            const rTree = help(i+1, r)
            for (let lNode of lTree){
                for(let rNode of rTree){
                    const curr = new TreeNode(i)
                    curr.left = lNode
                    curr.right = rNode
                    res.push(curr)
                }
            }
        }
        return res
    }
    return help(1, n)
};
// @lc code=end

