/* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining. */

function trap(height) {
  let maxLeft = 0;
  let maxRight = 0;
  let leftArr = [];
  let rightArr = [];
  let rainwater = 0;
  
  for (let i = 0; i < height.length; i += 1) {
    if (height[i] > maxLeft) {
      maxLeft = height[i];
    }
    leftArr[i] = maxLeft;
  }
  
  for (let j = height.length - 1; j >= 0; j -= 1) {
    if (height[j] > maxRight) {
      maxRight = height[j];
    }
    rightArr[j] = maxRight;
  }

  for (let k = 0; k < height.length; k += 1) {
    rainwater += Math.min(leftArr[k], rightArr[k]) - height[k];
  }
  
  return rainwater;    
};

/* TEST CASES */

const testTowers = [0,1,0,2,1,0,1,3,2,1,2,1];

const test0 = trap(testTowers); // --> 6

console.log(test0); // 6