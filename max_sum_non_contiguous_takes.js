// Given an array of integers, find the max sum when taking no more than 1 element in a row

function maxSum(arr) {
  let dp = [0, 0];

  for (var i = 0; i < arr.length; i += 1) {
    dp.push(Math.max(arr[i] + dp[i], dp[i + 1]));
  };

  return Math.max(dp[i], dp[i + 1]);
}

/* TEST CASES */

const testArr = [6, 20, 100, 5, -10, 10];

const test0 = maxSum(testArr); // --> 14;

console.log(test0); // 14