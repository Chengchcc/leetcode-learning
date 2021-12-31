/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if(n<4){
        return n -1
    }

    let ans = 1
    while(n>4){
        ans = (ans * 3) % 1000000007
        n -= 3
    }
    return (ans * n) % 1000000007
};