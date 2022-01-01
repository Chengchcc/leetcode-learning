/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if(root === null){
        return []
    }
    let result = []
    let queue = []
    let i = 1
    queue.push(root)
    while(queue.length > 0){
        let level = []
        let size = queue.length

        for(let i = 0; i < size; i++){
            let node = queue.shift()
            level.push(node.val)
            if(node.left !== null){
                queue.push(node.left)
            }
            if(node.right !== null){
                queue.push(node.right)
            }
        }
        if(i % 2 === 0){
           level = level.reverse()
        }
        result.push(level)
        i++
    }
    return result
};