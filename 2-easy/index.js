/*
  
Write a function twoSum(arr, target) that accepts an array and a
target number as args.  The function should a return a boolean
indicating if two distinct numbers of the array add up to the target value.
You can assume that input array contains only unique number

*/

export const twoSum = (arr, target) =>{
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];

            if (num1 + num2 === target) {
                return true;
            }
        }
    }

    return false;
};

/*

Write a function pairProduct that accepts an array of numbers and a product as arguments.
 The function should return a boolean indicating whether or not a pair of distinct
 elements in the array result in the product when multiplied together. You may assume that the input array contains unique elements.
*/

export const pairProduct = (numbers, product) =>{
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] * numbers[j] === product) {
                return true;
            }
        }
    }
    return false;
}

/*

  Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers
   and returns the total sum of all numbers.

*/

export const twoDimensionalSum = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let subArr = arr[i];

        for (let j = 0; j < subArr.length; j++) {
            sum += subArr[j];
        }
    }

    return sum;
};

let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

/*

Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix)
 and returns the largest value in the matrix. The matrix contains at least one value.

*/

export const maxInMatrix = (matrix) =>{
    let currentMax = -Infinity;
    for (let row = 0 ; row < matrix.length ; row++) {
      for (let col = 0 ; col < matrix[0].length ; col++) {
        if (matrix[row][col] > currentMax) {
          currentMax = matrix[row][col];
        }
      }
    }
    return currentMax;
  }
  
  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]

/*

A 2-dimensional array is also known as a "matrix".
 Write a function matrixAddition that accepts two matrices as arguments.
  The two matrices are guaranteed to have the same "height" and "width".
   The function should return a new matrix representing the sum of the two arguments. To add matrices, we add the values at the same positions.


*/

export const matrixAddition = (m1, m2) =>{
    let sum = [];
    for (let row = 0; row < m1.length; row++) {
        let subArray = [];
        for (let col = 0; col < m1[0].length; col++) {
            subArray.push(m1[row][col] + m2[row][col]);
        }
        sum.push(subArray);
    }
    return sum;
};

let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]

/*

 Pascal's triangle is a 2-dimensional array with the shape of a pyramid. The top of the pyramid is the number 1. To generate further levels of the pyramid, every element is the sum of the element above and to the left with the element above and to the right. Non-existing elements are treated as 0 when calculating the sum.

Write a function pascalsTriangle that accepts a positive number, n, as an argument and returns a 2-dimensional array representing the first n levels of Pascal's triangle. See the file for examples.

*/

let pascalsTriangle = function(height) {
    let triangle = [[1]];
    while (triangle.length < height) {
        let last = triangle[triangle.length - 1];
        let next = [1];
        for (let i = 0; i < last.length -1; i++) {
            next.push(last[i] + last[i + 1]);
        }
        next.push(1);
        triangle.push(next);
    }
    return triangle;
}

console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

/*

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
*/

export const AddingDigits = (num) =>{
    let n = num;

    while (n >= 10) {
        let sum = 0;

        while (n > 0) {
            sum = sum + n % 10;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return n;
}

/*

  o(1)
    return num - 9 * ((num-1)/9);

  */

/*

ReverseString

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

*/

export const reverseString = (s) =>{
  let strArr = str.split('');
    let start = 0;
    let end = strArr.length - 1;
    while (start < end) {
        let temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;
        start++;
        end--;
    }
    return strArr.join('');
}

/*

fizzBuzz

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

export const fizzBuzz = (n) =>{
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

Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once.


*/

export const validAnagram = (s, t) =>{

  /*
    cont arr1 = s.split('').sort();
    cont arr2 = t.split('').sort();
    cont return arr1.join('') === arr2.join('');

  */

    /*
      const count = [];
        for (let i = 0; i < s.length; i++) {
            count[s[i]] = (count[s[i]] || 0) + 1;
        }
        for (let i = 0; i < t.length; i++) {
            if (!count[t[i]]) {
                return false;
            } else {
                count[t[i]]--;
            }
        }
        return true;
    
    */


    if (s.length !== t.length) {
        return false;
    }
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
        if (sObj[key] !== tObj[key]) {
            return false;
        }
    }
    return true;
}


/*

 A phrase is a palindrome if, after converting all uppercase letters into lowercase 
 letters and removing all non-alphanumeric characters, it reads the same forward
  and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

export const validPalindrome = (str) =>{

    for (let i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
            return false
        }
    }
    
    return true

}

