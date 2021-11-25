/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(n === 1) return [0];
    const graph = new Array(n).fill(0).map(() => []);
    for (const edge of edges) {
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]);
    }
    let leaves = [];
    for (let i = 0; i < n; i++) {
        if(graph[i].length === 1) leaves.push(i);
    }
    while (n > 2) {
        n -= leaves.length;
        let newLeaves = [];
        for (const leaf of leaves) {
            // 叶子节点的相邻节点
            const neighbor = graph[leaf].pop();
            // 在neighbor的邻接表中删除这个叶子节点
            graph[neighbor] = graph[neighbor].filter(item => item !== leaf);
            if (graph[neighbor].length === 1) {
                newLeaves.push(neighbor);
            }
        }
        leaves = newLeaves;
    }
    return leaves;
};
// @lc code=end

