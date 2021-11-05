/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = [];
    const used = {};

    function dfs(path) {
        if (path.length == nums.length) { // 个数选够了
            res.push(path.slice()); // 拷贝一份path，加入解集res
            return;                 // 结束当前递归分支
        }
        for (let i = 0; i < nums.length; i++) { // for枚举出每个可选的选项
            if (used[i]) continue; // 使用过的，跳过
            if(i> 0 && nums[i] === nums[i-1] && !used[i-1]) continue; // 前一个数字和当前数字相同，且前一个数字没有被使用过，跳过
            path.push(nums[i]);         // 选择当前的数，加入path
            used[i] = true;       // 记录一下 使用了
            dfs(path);              // 基于选了当前的数，递归
            path.pop();             // 上一句的递归结束，回溯，将最后选的数pop出来
            used[i] = false;      // 撤销这个记录
        }
    }

    nums.sort((a, b) => a - b)
    dfs([]); // 递归的入口，空path传进去
    return res;
};
// @lc code=end

