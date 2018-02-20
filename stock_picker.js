// Given an array of stock prices at a corresponding time, find the highest profit assuming you can only buy and sell once

function maxProfit(prices) {
  let currMin = 0;
  let minIdx = 0;
  let maxIdx = 1;

  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < prices[currMin]) {
      currMin = i;
    }
    
    if (prices[i] - prices[currMin] > prices[maxIdx] - prices[minIdx]) {
      maxIdx = i;
      minIdx = currMin;
    }
  }

  let profit = prices[maxIdx] - prices[minIdx];
  
  if (profit <= 0) {
    return 0;
  }
  
  return profit;
};

/* TEST CASES */

const prices0 = [7, 1, 5, 3, 6, 4];
const prices1 = [7, 6, 4, 3, 1];

const test0 = maxProfit(prices0); // --> 5
const test1 = maxProfit(prices1); // --> 0

console.log(test0); // 5
console.log(test1); // 0