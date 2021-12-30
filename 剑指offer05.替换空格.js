/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    s = s.split('')
    let len = s.length, spaceCount = 0
    for(char of s){
        if(char == ' ') spaceCount++
    }
    let newLen = len + spaceCount * 2
    for (let i = len - 1, j = newLen - 1; i >= 0; i--, j--){
        if(s[i] == ' '){
            s[j] = '0'
            s[j-1] = '2'
            s[j-2] = '%'
            j-=2
        }else{
            s[j] = s[i]
        }
    }
    return s.join('')
};

s = replaceSpace("We are happy.")
console.log(s)