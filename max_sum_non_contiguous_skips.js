// Given an array of integers, find the max sum when skipping no more than 1 element in a row

function maxSum(arr) {
  let dp = [0, 0];

  for (var i = 0; i < arr.length; i += 1) {
    dp.push(arr[i] + Math.max(dp[i], dp[i + 1]))
  };

  return Math.max(dp[i], dp[i + 1]);
}

/* TEST CASES */ 

const testArr = [9, -1, -100, -3, 4, 5];

const test0 = maxSum(testArr); // --> 14;

console.log(test0); // 14