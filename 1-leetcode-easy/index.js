/*

fizzBuzz
https://leetcode.com/problems/fizz-buzz/
Given an integer n, return a string array where:

 - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 - answer[i] == "Fizz" if i is divisible by 3.
 - answer[i] == "Buzz" if i is divisible by 5.
 - answer[i] == i (as a string) if none of the above conditions are true.

 time complexity: O(n); space complexity: O(n)
*/

export const fizzBuzz = (n) =>{

    if (n.length === 0) return null;

    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('FizzBuzz');
        } else if (i % 3 === 0) {
            arr.push('Fizz');
        } else if (i % 5 === 0) {
            arr.push('Buzz');
        } else {
            arr.push(i.toString());
        }
    }
    return arr;
}

/*

addDigits
https://leetcode.com/problems/add-digits/

Given an integer num, repeatedly add all its digits until the result has only one digit, 
and return that digit.

time complexity: O(log n); space complexity: O(1)

Applying Digital Root Algorithm:
https://en.wikipedia.org/wiki/Digital_root

time complexity: O(1); space complexity: O(1)
*/

export const addDigits = (num) =>{
    let n = num;

    while (n >= 10) {
        let sum = 0;

        while (n > 0) {
            sum = sum + n % 10; // sum is remainder of n when divided by 10
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return n;
}

/*

twoSum
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two 
numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You cannot guarantee the array is sorted.

brute force time complexity: O(n^2); space complexity: O(1)
hash map time complexity: O(n); space complexity: O(n)
*/

// brute force:
const _twoSum = (arr, target) =>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
               return [i, j]
            }
        }
    }
};

// hash map:
export const twoSum = (nums, target) =>{
    // store target - num in hash map, index of num in arr in hash map
    // [1,5,9), 10] => {1:0, 5:1} => Last element matches target - num (1)
    let hashMap = {}; 
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (hashMap[diff] !== undefined) {
            return [hashMap[diff], i];
        }
        hashMap[nums[i]] = i;
    }
}

/*

Valid Palindrome
https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into lowercase 
letters and removing all non-alphanumeric characters, it reads the same forward
and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
Do not use the built-in split, reverse or join function.
Bonus: Ignore punctuation and spaces.

time complexity: O(n); space complexity: O(1)
*/

// two pointer:
export const validPalindrome = (str) =>{

    if (!str || str.length === 0) return true;

    // index pointer to left and right of string
    let leftPointer = 0;
    let rightPointer = str.length - 1;
    
    // left and right string characters
    let leftChar;
    let rightChar;

    while (leftPointer < rightPointer) {
       leftChar = str.charAt(leftPointer).toLowerCase();
       rightChar = str.charAt(rightPointer).toLowerCase();    

        // left and right characters !== alphanumeric, move left and right pointers forward
        if (!_isAlphaNumeric(leftChar)) {
            leftPointer++;
            continue;
        }
        if (!_isAlphaNumeric(rightChar)) {
            rightPointer--;
            continue;
        }

        // left and right characters === alphanumeric, check if they match
        if (leftChar !== rightChar) {
            return false;
        }

        // move left and right pointers forward
        leftPointer++;
        rightPointer--;
    }
    return true;
}

const _isAlphaNumeric = (char) =>{
    return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
}

/*

Valid Anagram
https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once.

time complexity: O(n); space complexity: O(n)
O(n + n + n) = O(n)

hint: order does not matter; frequency of letters does matter
*/

// hash map:
export const validAnagram = (s, t) =>{

    if (s.length !== t.length || s.length === 0 || t.length === 0) return false; 
    
    let sObj = {};
    let tObj = {};

    for (let i = 0; i < s.length; i++) {
        if (sObj[s[i]]) {
            sObj[s[i]]++;
        } else {
            sObj[s[i]] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (tObj[t[i]]) {
            tObj[t[i]]++;
        } else {
            tObj[t[i]] = 1;
        }
    }
    for (let key in sObj) {
        if (sObj[key] !== tObj[key]) { // key and value are not same
            return false;
        }
    }
    return true;
}

/*

Roman to Integer
https://leetcode.com/problems/roman-to-integer/

Given a roman numeral, convert it to an integer.

Input: s = "IX"
Output: 9
Explanation: III = 3

Input: s = "XLIV"
Output: 44
Explanation: L = 10, L= 50, I = 1, V = 5

hint: read the roman numeral from right to left
https://www.romannumerals.org/converter

time complexity: O(n); space complexity: O(1)
*/

export const romanToInt = (s) =>{

    if (!s || s.length === 0) return 0;

    let romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = 0;
    let prev = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let curr = romanMap[s[i]];
        if (curr < prev) {
            sum -= curr;
        } else {
            sum += curr;
        }
        prev = curr;
    }
    return sum;
}

/*
   
Valid Parentheses
https://leetcode.com/problems/valid-parentheses/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

time complexity: O(n); space complexity: O(n)

https://www.youtube.com/watch?v=OxbxP5_-Tcs

*/

export const validParentheses = (s) =>{

    if (!s || s.length === 0) return true;

    let stack = [];
    let parens = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        if (parens[s[i]]) {
            stack.push(parens[s[i]]);
        } else if (stack.length > 0 && stack[stack.length -1] === s[i]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

/*

Find the Difference of Two Arrays
https://leetcode.com/problems/find-the-difference-of-two-arrays/

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

  - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
  - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order.

*/

export const findDifference = (nums1, nums2) => {

    if (nums1.length === 0 || nums2.length === 0) return [[],[]];

    const distinctNums1 = [];
    const distinctNums2 = [];
  
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i]) && !distinctNums1.includes(nums1[i])) {
           distinctNums1.push(nums1[i])
        }
    }
  
    for (let i = 0; i < nums2.length; i++) {
      if (!nums1.includes(nums2[i]) && !distinctNums2.includes(nums2[i]))  {
           distinctNums2.push(nums2[i])
        }
    }
  
    return [distinctNums1, distinctNums2]
}

/*

Concatenation of Array
https://leetcode.com/problems/concatenation-of-array/

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
*/

export const getConcatenation = function(nums) {
    
    if (nums.length === 0) return [];

    const _array = [...nums];
    
    for (let i = 0; i < nums.length; i++) {
        
        _array.push(nums[i])
    }
    
    return _array;
};

/*

Shuffle the Array
https://leetcode.com/problems/shuffle-the-array/

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 

*/
export const shuffle = function(nums, n) {

    const result = [];
    
    // loop through n (n * 2 length array)
    for (let i = 0; i < n; i++) { 
       result[2*i] = nums[i]; // even
       result[2*i+1] = nums[n+i] // odd
    }
    
    return result;
};


/*

Flipping an Image
https://leetcode.com/problems/flipping-an-image/

Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0]
 start: [1,1,0]
 step 1: [1,1,0] => [0,1,1] (flip horizontally) - same as reversing an array
 step 2: [0,1,1] => [1,0,0] (invert)

*/

export const flipAndInvertImage = function(image) {

    // short way:
    // return image.map(row => row.reverse().map(x => x === 0 ? 1 : 0));

    // long way:
    // first reverse the array:
    let results = [];

    // first reverse:
    for (let i = 0; i < image.length; i++) {
      let reversed = []
      for (let j=image[i].length -1; j > -1; j--) {          
          reversed.push(image[i][j]);
      }
      results.push(reversed)
    }
  
    // then invert:
    for (let i = 0; i < results.length; i++) {
        for (let j = 0; j < results[i].length; j++) {
            results[i][j] = results[i][j] === 0 ? 1 : 0;
        }
    }
    
    return results;
};

/*
 
Maximum Subarray
https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

*/

export const maxSubArray = function(nums) {
    
    if (nums.length === 0) return 0;

    // brute force (O(n^2))):
    /*
      let max = nums[0];
      for (let i = 0; i < nums.length; i++) {
         let sum = 0;
         for (let j = i; j < nums.length; j++) {
             sum += nums[j];
             if (sum > max) max = sum;
         }
      }
      return max;
    */

      // linear (O(n)):
      let max = nums[0];
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
          sum += nums[i];
          if (sum > max) max = sum;
          if (sum < 0) sum = 0;
      }
      return max;
};

/*

Contains Duplicate
https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

*/

export const containsDuplicate = function(nums) {

    // brute force (O(n^2)) - naive linear search:
    /*
     for (let i = 0; i < nums.length; i++) {
         for (let j = i + 1; j < nums.length; j++) {
             if (nums[i] === nums[j]) return true;
         }
     }
     return false;
    */

    // logrithmic (O(n log n)):
    // sorting allows us to use loop once to find the first duplicate
    /*
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false;
    */

    // linear (O(n)):
    // use a hash table to store the values
    const _hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (_hash[nums[i]]) return true;
        _hash[nums[i]] = true;
    }
    return false; 
}

/*

Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing
a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

*/

export const maxProfit = function(prices) {
    
    if (prices.length === 0) return null;
    
    //  linear (O(n)):
        let max = 0;
        let min = prices[0];
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < min) min = prices[i];
            if (prices[i] - min > max) max = prices[i] - min;
        }
        return max;

}