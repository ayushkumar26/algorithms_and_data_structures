// binary search algorithm on an sorted array
// return index of target if found, otherwise return -1

function binarySearch(arr, target) {
  // check if middle element of array equals target
    // take the greater of two elements in the case of an even length array
  // if so, return index of current (middle) element
  // if not, check if target is greater or less than middle element
      // if target is greater, call binarySearch on larger half of array
      // if target is less, call binarySearch on smaller half of array

  const currentIdx = Math.ceil((arr.length - 1) / 2);
}

/* TEST CASES */

const testArrOdd = [1, 2, 3, 4, 5, 6, 7];
const testArrEven = [1, 2, 3, 4, 5, 6, 7, 8];

const targetOdd = 3;
const targetEven = 10;

binarySearch(testArrOdd, targetOdd); // --> 2
// binarySearch(testArrEven, targetEven); // --> -1