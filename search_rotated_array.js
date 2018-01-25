// search for a given element in a sorted array that has been rotated some arbitrary number of times
// return -1 if the element does not exist

function searchRotatedArrayRecurse(arr, target, low, high) {
  if (low > high) {
    return -1;
  }

  let mid = low + Math.floor((high - low) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < arr[high]) {
    if (target > arr[mid] && target <= arr[high]) {
      return searchRotatedArrayRecurse(arr, target, mid + 1, high);
    } else {
      return searchRotatedArrayRecurse(arr, target, low, mid - 1);
    }
  } else {
    if (target >= arr[low] && target < arr[mid]) {
      return searchRotatedArrayRecurse(arr, target, low, mid - 1);
    } else {
      return searchRotatedArrayRecurse(arr, target, mid + 1, high);
    }
  }

  return -1;
}

function searchRotatedArray(arr, target) {
  return searchRotatedArrayRecurse(arr, target, 0, arr.length - 1);
}

/* TEST CASES */

const arr0 = [176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162];
const arr1 = [47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222, 1, 10, 20];

const test0 = searchRotatedArray(arr0, 120); // --> 16
const test1 = searchRotatedArray(arr0, 260); // --> -1
const test2 = searchRotatedArray(arr1, 63); // --> 2
const test3 = searchRotatedArray(arr1, 1337); // --> -1

console.log(test0); // 16
console.log(test1); // -1
console.log(test2); // 2
console.log(test3); // -1
