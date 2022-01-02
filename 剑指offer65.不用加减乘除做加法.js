/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
    while(b!=0){
        let c = a^b;
        b = (a&b)<<1;
        a = c;
    }
    return a;
};