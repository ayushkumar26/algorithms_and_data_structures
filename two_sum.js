// given an array of integers, return the indices of the pair that sum to target
// can not use the same index twice

var twoSum = function(nums, target) {
  var hash = {};

  for (var i = 0; i < nums.length; i += 1) {
    var solution = target - nums[i];

    if (hash[solution] !== undefined && hash[solution] !== i) {
      return [hash[solution], i];
    }

    hash[nums[i]] = i;
  }

  return 'No satisfactory unique integer pair'
};
