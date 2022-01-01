/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if(root === null){
        return 'null';
    }
    let result = []
    let queue = []
    queue.push(root)
    while(queue.length > 0){
        let node = queue.shift()
        if(node === null){
            result.push('null')
        }else{
            result.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
        }
    }
    return result.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if(data === 'null'){
        return null
    }
    let array = data.split(',')
    let root = new TreeNode(array[0])
    let queue = []
    queue.push(root)
    let i = 1
    while(queue.length > 0){
        let node = queue.shift()
        if(array[i] !== 'null'){
            node.left = new TreeNode(array[i])
            queue.push(node.left)
        }
        i++
        if(array[i] !== 'null'){
            node.right = new TreeNode(array[i])
            queue.push(node.right)
        }
        i++
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */