// Implement the bubble sort algorithm on an array of integers

// recursive solution

function bubbleSort(arr) {
  // initialize a swapped holder variable to 'false'
  // iterate through the arr and check if next element < current element
    // if so, swap both elements
    // change swapped to 'true'
  // once at end of arr, if swapped is 'true', call function again
  // function will terminate when there are no further swaps, i.e., arr is sorted

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
    return arr;
  }
  
  bubbleSort(arr);
}

// TESTS:

// recursive solution: 

const testArr0 = [0, 7, 2, 1, 6, 4, 5, 3];

const test0 = bubbleSort(testArr0);

console.log(test0);