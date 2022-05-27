
/*

maxValue([1,2,3,4,5]) // 5
Write a function, maxValue, that takes in array of numbers as an argument.
The function should return the largest number in the array.
Solve this without using any built-in array methods.
You can assume that the array is non-empty.

*/

export const maxValue = (nums) => {
    let largest = nums[0]
    
    for (let i=0; i < nums.length; i++) {
      if (nums[i] > largest) largest = nums[i];
    }
    
    return largest;
    
  };