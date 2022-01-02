/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
   s+=' '
    let list = [], str = '', resStr = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            str += s[i]
        } else {
            if (str) {
                list.push(str)
            }
            str = ''
        }
    }
    for (let j = list.length - 1; j >= 0; j--) {
        resStr += j !== 0 ? list[j] + ' ' : list[j]
    }
    return resStr
};