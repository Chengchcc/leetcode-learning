/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    if(n === 0) return 0;
    let digit = 1, count = 9, start = 1;
    while(n > count){
        n -= count;
        digit++;
        start *= 10;
        count = digit * 9 * start
    }
    let num = start + Math.floor((n - 1) / digit);
    let index = (n - 1) % digit;
    return num.toString()[index];
};