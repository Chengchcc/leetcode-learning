/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const res = new Array();
    //tips: 每n个单词，至少需要n - 1个空格
    let restArr = words.reduce((pre, cur) => {
        //1. 先计算当前数组的长度
        const wordsLen = pre.reduce((p, c) => p + c.length, 0);
        //2. 加上空格后的最小长度
        const strLenWithSpaces = wordsLen + pre.length - 1;
        //3. 加上当前单词后的字符串长度
        const strLenOnlyWithCur = wordsLen + cur.length;
        //4. 加上当前单词和空格后的字符串长度
        const strLenWithCurAndSpaces = strLenOnlyWithCur + pre.length;
        //5. 如果加上当前单词和空格后的字符串长度小于等于maxWidth，则继续向下
        if (strLenWithCurAndSpaces <= maxWidth) {
            pre.push(cur);
            return pre;
        } else {
            //6. 否则，处理该数组，使其变为长度为maxWidth长度的字符串
            //7. 计算除去单词后，所需要空格的个数
            const spaces = maxWidth - wordsLen;
            if (pre.length === 1) {
                //此处就是将字符串补齐到maxWidth的长度
                res.push(pre.join('') + new Array(spaces).fill(' ').join(''));
            } else {
                //8. 根据单词个数分配空格，n个单词则将空格分为（n - 1）份
                const avgSpaces = parseInt(spaces / (pre.length - 1));
                //9. 计算平均分配后，剩余的空格个数
                let modSpaces = spaces % (pre.length - 1);
                //10. 如果modSpaces为0， 则直接按avgSpaces分配
                res.push(pre.reduce((p, c, i) => {
                    p += c;
                    // 此处需要将空格尽量均匀的分配
                    if (i === 0) {
                        p += new Array(avgSpaces + (modSpaces <= 0 ? 0 : 1)).fill(' ').join('');
                    } else if (i !== pre.length - 1) {
                        p += new Array(avgSpaces + (modSpaces <= 0 ? 0 : 1)).fill(' ').join('');
                    }
                    modSpaces--;
                    return p;
                }, ''));
            }
            const newPre = new Array();
            newPre.push(cur);
            return newPre;
        }
    }, new Array());
    //此处就是将字符串补齐到maxWidth的长度
    res.push(restArr.join(' ') + new Array(maxWidth - restArr.reduce((p, c) => p + c.length, 0) - (restArr.length - 1)).fill(' ').join(''));
    return res;
};
// @lc code=end

