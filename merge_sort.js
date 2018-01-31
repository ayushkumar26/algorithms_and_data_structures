function mergeSort(arr) {
  split(arr);
}

function merge(arr1, arr2) {

}

function split(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const leftArr = [];
  const rightArr = [];
  const pivot = Math.floor(arr.length / 2);
  // console.log('pivot:', pivot);

  for (var i = 0; i < pivot; i += 1) {
    leftArr.push(arr[i]);
  }

  for (var i = pivot; i < arr.length; i += 1) {
    rightArr.push(arr[i]);
  }

  // console.log('left:', leftArr);
  // console.log('right:', rightArr);

  const newLeft = split(leftArr);
  const newRight = split(rightArr);

  console.log('newLeft:', newLeft);
  console.log('newRight:', newRight);
}

/* TEST CASES */

const testArr0 = [2, 1, 4, 3];

const test0 = mergeSort(testArr0); // --> [1, 2, 3, 4];

console.log(test0); // [1, 2, 3, 4];