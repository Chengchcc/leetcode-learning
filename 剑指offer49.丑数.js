/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let ugly = [1];
    let i2 = 0, i3 = 0, i5 = 0;
    let factor2 = 2, factor3 = 3, factor5 = 5;
    for (let i = 1; i < n; i++) {
        let min = Math.min(factor2, factor3, factor5);
        ugly[i] = min;
        if (min === factor2) {
            factor2 = ugly[++i2] * 2;
        }
        if (min === factor3) {
            factor3 = ugly[++i3] * 3;
        }
        if (min === factor5) {
            factor5 = ugly[++i5] * 5;
        }
    }
    return ugly[n - 1];
};