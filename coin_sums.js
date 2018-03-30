// Given an amount, return the number of unique combinations of change that can be made with US coins

function makeChange(total) {
  const coins = [1, 5, 10, 25, 50];
  let count = 0;
  
  const recurse = (index, amountRemaining) => {
    let currentCoin = coins[index];
    
    if (index === 0) {
      if (amountRemaining % currentCoin === 0) {
        count += 1;
      }
      
      return;
    }
    
    while (amountRemaining >= 0) {
      recurse(index - 1, amountRemaining);
      amountRemaining -= currentCoin;
    }
  };
  
  recurse(coins.length - 1, total);
  return count;
}

/* TEST CASES (more coming soon) */

const change0 = 5;

const test0 = makeChange(change0);

console.log(test0); // 2
