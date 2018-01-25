// binary search algorithm on an array
// return index of target if found, otherwise return -1

function binarySearch(arr, target) {
  console.log(arr);
}

/* TEST CASES */

const testArrOdd = [1, 2, 3, 4, 5, 6, 7, 8];
const testArrEven = [1, 2, 3, 4, 5, 6, 7];

const targetOdd = 3;
const targetEven = 8;

binarySearch(testArrOdd, targetOdd); // --> 2
binarySearch(testArrEven, targetEven); // --> -1