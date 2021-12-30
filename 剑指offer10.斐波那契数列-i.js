/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const MOD = 1000000007;
    if(n <= 0) return 0
    if(n == 1) return 1
    let a = 0
    let b = 1
    let c = 0
    for(let i = 2; i <= n; i++){
        c = (a + b) % MOD
        a = b
        b = c
    }
    return c
};