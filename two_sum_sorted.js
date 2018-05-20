// given an sorted array of increasing integers, return the pair that sum to the target
// do not use the same element twice

const twoSumSorted = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let total = nums[i] + nums[j];

    if (total === target && nums[i] !== nums[j]) {
      return [i + 1, j + 1];
    } else if (total > target) {
      j -= 1;
    } else {
      i += 1
    }
  }

  return 'No satisfactory integer pair';
};

// TEST CASES:

const test0 = twoSumSorted([2,7,11,15], 9);

console.log(test0);