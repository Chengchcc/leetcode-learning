/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const arr = s.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let l =0, r=arr.length-1;
    while(l< r){
        if(!vowels.includes(arr[l])){
            l++;
        }else if(!vowels.includes(arr[r])){
            r--;
        }else{
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }
    return arr.join('');
};
// @lc code=end

