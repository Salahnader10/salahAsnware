// Q1

function missingNumber(nums) {
  const n = nums.length;
  let sum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < n; i++) {
    actualSum += nums[i];
  }

  return sum - actualSum;
}

const nums = [3, 0, 1];
const missing = missingNumber(nums);
console.log("Missing  :", missing);

// Q2

function findMissingNumberInArray(nums) {
  const n = nums.length;
  let missingNumber = n;

  for (let i = 0; i < n; i++) {
    missingNumber ^= i ^ nums[i];
  }

  return missingNumber;
}

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const missing2 = findMissingNumberInArray(nums2);
console.log("Missing  :", missing2);

// Q3

function findMissingNumberInArray2(nums) {
  let missingNumber = nums.length;

  for (let i = 0; i < nums.length; i++) {
    missingNumber ^= i ^ nums[i];
  }

  return missingNumber;
}

const nums3 = [0, 1];
const missing3 = findMissingNumberInArray2(nums3);
console.log("Missing  :", missing3);
