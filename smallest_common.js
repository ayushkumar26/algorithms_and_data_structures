// Given 3 arrays, find the smallest common number between them

function smallestCommon(arr0, arr1, arr2) {
  let smallestCommon = -1;
  let curr0 = 0;
  let curr1 = 0;
  let curr2 = 0;

  while (arr0[curr0 + 1] && arr1[curr1 + 1] && arr2[curr2 + 1]) {
    if (arr0[curr0] === arr1[curr1] && arr0[curr0] === arr2[curr2]) {
      return arr0[curr0];
    }
    if (arr0[curr0] < arr1[curr1] && arr0[curr0] < arr2[curr2]) {
      curr0 += 1;
    } else if (arr1[curr1] < arr0[curr0] && arr1[curr1] < arr2[curr2]) {
      curr1 += 1;
    } else {
      curr2 += 1;
    }
  }

  return smallestCommon;
}

// TEST CASES

const testArr0 = [6, 7, 10, 25, 30, 63, 64];
const testArr1 = [-1, 4, 5, 6, 7, 8, 50];
const testArr2 = [1, 6, 10, 14];

const test0 = smallestCommon(testArr0, testArr1, testArr2);

console.log(test0);
