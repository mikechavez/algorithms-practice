/**
 * 
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// ********* NAIVE SOLUTION **********
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// ********* HASHMAP SOLUTION **********
// iterate through array and store compliment as (compliment : indexOfCompliment) in a hashmap
var twoSum = function(nums, target) {
  let compMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (compMap[nums[i]] >= 0) return [compMap[nums[i]], i];
    compMap[target - nums[i]] = i;
  }
};

twoSum([7, 11, 15, 2], 9);
