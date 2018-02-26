// Given an array of integers, move all the zeros to the left

function moveZerosLeft(arr) {
  let result = [];
  let counter = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) {
      result[counter] = 0;
      counter += 1;
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== 0) {
      result[counter] = arr[i];
      counter += 1;
    }
  }

  return result;
}

// TEST CASES:

const testArr0 = [1, 10, 20, 0, 59, 63, 0, 88, 0];

const test0 = moveZerosLeft(testArr0);

console.log(test0);