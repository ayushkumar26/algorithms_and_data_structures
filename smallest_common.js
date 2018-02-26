// Given 3 arrays, find the smallest common number between them

function smallestCommon(a, b, c) {
  let smallestCommon = -1;
  let i = 0;
  let j = 0;
  let k = 0;

  while (a[i + 1] && b[j + 1] && c[k]) {
    if (a[i] === b[j] && a[i] === c[k]) {
      return a[i];
    }

    if (a[i] <= b[j] && a[i] <= c[k]) {
      i += 1;
    } else if (b[j] <= a[i] && b[j] <= c[k]) {
      j += 1;
    } else {
      k += 1;
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
