/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
   let str = num.toString();
   let dp = [1, 1];
   let len = str.length;
    for(let i = 1; i <= len; i++){
        const preNum = parseInt(str[i - 2] + str[i - 1]);
        if (preNum >= 10 && preNum <= 25) {
            dp[i] = dp[i - 1] + dp[i - 2];
        } else {
            dp[i] = dp[i - 1];
        }
    }
    return dp[len];

};

console.log(translateNum(25))