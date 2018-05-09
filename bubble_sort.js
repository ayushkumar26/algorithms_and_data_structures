// Implement the bubble sort algorithm on an array of integers

function bubbleSort(arr) {
  // start swap counter at 0
  // iterate through the arr and check if e + 1 < e
    // if so, swap both elements
    // increment swap counter
  // once at end of arr, if swaps > 0, sort arr again

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

const testArr0 = [0, 7, 2, 1, 6, 4, 5, 3];

const test0 = bubbleSort(testArr0);

console.log(test0);