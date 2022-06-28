// USE RECURSION TO SOLVE THE FOLLOWING PROBLEMS:

// Note: You can add additional parameters as storage for the recursive case.

/*
repeater(char)   
Write a function that takes an input character and returns that character repeated 5 times using recursion. 
For example, if the input is 'g', then the output should be 'ggggg'.

Note: You can add an additional argument to store the output.

*/

function repeater(char) {
   
    // base case: when char length is equal to 5
    if (output.length == 5) return output;
    // recursive case: execute char (adding the char to char)
    return repeater(char + char[0]);
}

/*
  
factorial(num)
Write a function that returns the factorial of a number.

4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

*/

function factorial(num, product = 1) {

    // base case: num === 1; return product
    // 1! = 1 || 0! = 1
    if (num <= 1) return product
    // recursive case: factorial (num -1, num * product)
    return factorial(num - 1, num * product);
}

/*
 
getLength(array)
Get the length of an array using recursion without accessing its length property.

*/

function getLength(array, length = 0) {

    // base case: check if first element is undefined (same as zero length)
    if (array[0] === undefined) return length;
    
    // recursive case: remove first element array
    return getLength(array.slice(1), length +=1)
}

/*

shuffleCards(topHalf, bottomHalf)

You are creating a card game application with your friend.
She already wrote a function that divides the deck of cards into top and bottom halves, 
but needs help writing a function that shuffles the two halves together again.

Write a function that takes two arrays as inputs, representing the top and bottom halves
of a deck of cards, and shuffles them together. 

The function will return a single array containing the elements from both input arrays
interleaved, like so:

  - first element should be the first element of the first input array,
  - second element should be the first element of the second input array,
  - the third element should be the second element of the first input array,
  - fourth element should be the second element of the second array,
  and so on.

*/

function shuffleCards(topHalf, bottomHalf) {

   
}