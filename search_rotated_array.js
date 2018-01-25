// search for a given element in a sorted array that has been rotated some arbitrary number of times
// return -1 if the element does not exist

function searchRotatedArrayRecurse(arr, target, low, high) {
  if (low > high) {
    return -1;
  }

  let mid = low + Math.floor((high - low) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  // if high > mid (aka rotation is on right side of arr)
    // if target > mid && target <= high
      // use right side of array (mid + 1 to high)
    // else use left side of array (low to mid - 1)

  // if high < mid (aka rotation is on left side of arr)
    // if target > mid || target <= high
      // use right side of array (mid + 1 to high)
    // else use left side of array (low to mid - 1)
      
}

function searchRotatedArray(arr, target) {

}

/* TEST CASES */

const arr0 = [176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162];

const test0 = searchRotatedArray(arr0, 120);

console.log(test0);