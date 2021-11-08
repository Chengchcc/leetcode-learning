/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let l = r = 0, res =''
    const map = {};
    const baseMap = t.split('').reduce((pre, c)=>{
        pre[c] = pre[c]? ++pre[c]: 1
        return pre
    }, new Array())

    const check = ()=>{
        for(let key in baseMap) {
            if (!map[key] || map[key] < baseMap[key]) {
                return false;
            }
        }
        return true;
    }

    while(l<s.length){
        const contain = check()
        if(contain){
            if((r-l)<res.length || res == ""){
                res = s.slice(l, r)
            }
            let word = s[l]
            if(map[word]>1){
                map[word]--
            }else {
                delete map[word]
            }
            l++
        }else {
            r++
            if(r>s.length) break
            let word = s[r-1]
            map[word] = map[word]? ++map[word]: 1
        }
    }
    return res
};
// @lc code=end


