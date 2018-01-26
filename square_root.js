/* Given a double number, write a function to calculate its square root. */

function squareRootIterative(num) {
  const EPSILON = 0.0001;

  let low = 0;
  let high = 1 + num / 2;

  while (low < high) {
    let mid = (low + high) / 2;
    let square = mid * mid;
    let diff = Math.abs(num - square);

    if (diff <= EPSILON) {
      return mid;
    };

    if (square < num) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return 'Cannot find square root';
}

/* TEST CASES */ 

const testNum0 = 9;
const testNum1 = 16;
const testNum2 = 25;
const testNum3 = 1000;

// the following tests will include decimals, even for perfect squares, because we're looking only within the epsilon range
const test0 = squareRootIterative(testNum0); // --> 3
const test1 = squareRootIterative(testNum1); // --> 3
const test2 = squareRootIterative(testNum2); // --> 5
const test3 = squareRootIterative(testNum3); // --> 3

console.log(test0); // ~3
console.log(test1); // ~4
console.log(test2); // ~5
console.log(test3); // 31.6227766...
