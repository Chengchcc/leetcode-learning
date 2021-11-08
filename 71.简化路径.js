/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = []
    const dirs = path.split('/')
    if(!dirs.length) return '/'
    for(const dir of dirs) {
        if(dir === '..'){
            stack.pop()
        }else if(dir === '.' || dir === ''){
            continue
        }else {
            stack.push(dir)
        }
    }
    return '/' + stack.join('/')
};
// @lc code=end

