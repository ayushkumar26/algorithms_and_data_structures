// binary search algorithm on an sorted array
// return index of target if found, otherwise return -1

function binarySearchRecurse(arr, target, low, high) {
  if (low > high) {
    return -1;
  }

  let mid = low + Math.floor((high - low) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecurse(arr, target, mid + 1, high);
  } else {
    return binarySearchRecurse(arr, target, low, mid - 1);
  }
}

function binarySearch(arr, target) {
  return binarySearchRecurse(arr, target, 0, (arr.length - 1));
}

/* TEST CASES */

const testArrOdd = [1, 2, 3, 4, 5, 6, 7];
const testArrEven = [1, 2, 3, 4, 5, 6, 7, 8];

const targetOdd = 3;
const targetEven = 10;

const testOddLength = binarySearch(testArrOdd, targetOdd); // --> 2
const testEvenLength = binarySearch(testArrEven, targetEven); // --> -1

console.log(testOddLength); // 2
console.log(testEvenLength); // -1
