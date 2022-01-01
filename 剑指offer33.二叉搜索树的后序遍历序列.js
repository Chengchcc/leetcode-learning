/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    if (postorder.length <= 1)
        return true
    let root = postorder[postorder.length - 1]//找到当前根节点
    let index = postorder.findIndex(n => n > root)//找第一个大于根节点的下标进行数组分割
    let arr1 = postorder.slice(0, index)//左子树
    let arr2 = postorder.slice(index, postorder.length - 1)//右子树
    return (arr1.every(n => n < root) && arr2.every(n => n > root))//判断是否左右子树都符合二叉搜索树的规则
        && verifyPostorder(arr1)
        && verifyPostorder(arr2)
};