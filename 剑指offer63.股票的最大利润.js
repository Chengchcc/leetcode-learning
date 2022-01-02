/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = -Infinity;
    let sell = 0;
    let hold = 0;
    for (let i = 0; i < prices.length; i++) {
        buy = Math.max(buy, -prices[i]);
        sell = Math.max(sell, buy + prices[i]);
        hold = Math.max(hold, sell);
    }
    return hold;
};