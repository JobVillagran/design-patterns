/*
Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var min = 0;
	var max = nums.length - 1;
    var guess;
    var attempts = 0;
    
    while (max >= min){
        guess = Math.floor((min + max) / 2);
        attempts++;
        
          if (nums[guess] === target) {
              console.log("number of attempts: " + attempts);
            return guess;
        } else if (nums[guess] < target) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
        console.log(guess);
    }

	return -1;
	
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];