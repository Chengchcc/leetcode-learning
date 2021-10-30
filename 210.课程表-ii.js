/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // 邻接表
    let map = {}
    for(let i =0; i<numCourses; i++){
        map[i] = []
    }
    prerequisites.map(pre=> map[pre[1]].push(pre[0]))

    const topList = [];
    const visited = new Array(numCourses).fill(0)
    const dfs = (i) => {
        if (visited[i] === 1) {
            return false
        }
        if (visited[i] === 2) {
            return true
        }

        visited[i] = 1;
        for (let k of map[i]) {
            if (!dfs(k)) {
                return false
            }
        }
        visited[i] = 2;
        topList.push(i)
        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return []
        }
    }

    let l = 0, r = numCourses - 1;
    reverse(topList, l, r)
    return topList
};
function reverse(arr, left, right) {
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp
        left++;
        right--
    }
}

// @lc code=end

