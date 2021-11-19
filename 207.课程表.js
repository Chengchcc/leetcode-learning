/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let map = {}
    for (let i = 0; i < numCourses; i++) {
        map[i] = []
    }
    prerequisites.map(pre => map[pre[1]].push(pre[0]))

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
        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false
        }
    }

    return true
};
// @lc code=end

