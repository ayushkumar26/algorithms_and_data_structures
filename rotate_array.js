// Given an array of integers, rotate the array by 'N' elements.

const rotateArray = (arr, N) => {
  if (N === 0) {
    return arr;
  }
  if (N < 0) {
    const toRotate = arr.splice(0, 0 - N);
    const result = [...arr, ...toRotate];
    return result;
  }
  const toRotate = arr.splice(arr.length - N, N);
  const result = [...toRotate, ...arr];
  return result;
};

/* TEST CASES */

const testArr0 = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
const testArr1 = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];


const test0 = rotateArray(testArr0, 2);
const test1 = rotateArray(testArr1, -1);

console.log(test0);
console.log(test1);