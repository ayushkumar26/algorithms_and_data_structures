// Implement the bubble sort algorithm on an array of integers

// recursive solution

function bubbleSortRecurse(arr) {
  // initialize a swapped holder variable to 'false'
  // iterate through the arr and check if next element < current element
    // if so, swap both elements
    // change swapped to 'true'
  // once at end of arr, if swapped is 'true', call function again
  // function will terminate when there are no further swaps, i.e., arr is sorted
  // return arr

  var swapped = false; 
  
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i + 1] < arr[i]) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      swapped = true;
    }
  }

  if (swapped) {
    bubbleSortRecurse(arr);
  }
  
  return arr;
}

function bubbleSortIterate(arr) {
  // keep a swap counter variable
  // iterate arr and check if next element < current element
    // if so, swap both elements
    // change increment swapped counter
  // if at end of array and there's been a swap, sort arr again
  // if at end of array and no swaps, return arr

  var swapped = true;

  while (swapped) {
    var swaps = 0;
    for (var i = 0; i < arr.length; i += 1) {
      if (arr[i + 1] < arr[i]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swaps += 1;
      }
    }
    if (swaps === 0) {
      swapped = false;
    }  
  }

  return arr;
}

// TESTS:

// recursive solution: 

const testArr0 = [0, 7, 2, 1, 6, 4, 5, 3];

const test0 = bubbleSortRecurse(testArr0);

console.log(test0);

// iterative solution:

const testArr1 = [0, 7, 2, 1, 6, 4, 5, 3];

const test1 = bubbleSortIterate(testArr1);

console.log(test1);
