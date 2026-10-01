// Leetcode 121 Best Time to Buy & Sell Stock
let prices = [4, 3, 5, 7, 2, 8, 10];
function maxProfit(prices) {
    let min = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
        if(prices[i] < min) {
            min = prices[i];
        }
    }
    return maxProfit;
}

let res = maxProfit(prices);
console.log(res);