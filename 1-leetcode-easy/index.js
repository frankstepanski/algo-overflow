/*

fizzBuzz

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
export const twoSum = (arr, target) =>{
    // store target - num in hash map, index of num in arr in hash map
    // [1,5,9), 10] => {1:0, 5:1} => Last element matches target - num (1)
    let hashMap = {}; 
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (hashMap[diff] !== undefined) {
            return [hashMap[diff], i];
        }
        hashMap[arr[i]] = i;
    }
}

/*

Valid Palindrome

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

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

  - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
  - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order.

*/





/*

Concatenation of Array

*/

/*

Shuffle the Array


*/

/*

Flipping an Image

*/


/*
 
Maximum Subarray

*/

/*

Contains Duplicate

*/


