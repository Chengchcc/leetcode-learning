/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    let i= 0;
    for (let l = 2; l <= n; l++) {
        i = (i+m) % l;
    }
    return i;
};