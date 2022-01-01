/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
   var backtrace = function(s, path, res){
         if(s.length === 0){
             if(res.indexOf(path) === -1){
                res.push(path)
             }
         }
         for(let i = 0; i < s.length; i++){
              let tmp = s.substring(0, i) + s.substring(i + 1, s.length)
              backtrace(tmp, path + s[i], res)
         }
    }
    var res = []
    backtrace(s, '', res)
    return res
};