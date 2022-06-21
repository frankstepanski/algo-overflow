/*
evaluateObj(obj)
You are given an object containing several key/value pairs. 
Add up all the values of properties (whose is a number) and return the total.
*/

export const evaluateObj = (obj) => {

  if (typeof obj !== 'object' || Object.keys(obj).length === 0) {
    return null;
  }

  let total = 0;

  for (let prop in obj) {
    if (typeof obj[prop] === 'number') {
      total += obj[prop]
    }
  }

  return total
}

/*
map(array, callback)

Create a function that takes two arguments: an array and a callback.
The function will execte the callback on every element of the array.
The callback should return a new array with the result of the callback.
Note: the callback can be as simple as adding two arguments together.
*** Do not use the native map method ***
*/        
  
export const map = (arr, cb) => {

    if (arr.length === 0) return null;
  
    const _arr = [];
  
    for( let i = 0; i < arr.length; i++) {
      _arr.push(cb(arr[i]));
    }
    
    return _arr;
}

/*
reduce(arr, callback, initVal)
Create a function that takes an array and reduces the elements to a single value.
The function loops through the array and applies the callback function to each element.

The function has an "accumulator value" that keeps track of the accumulated output
of each loop. It starts out equal to the 3rd argument or first value in passed array.
  - array is iterated over passing accumulator and next array element as arguments to callback.
  - callback's return value becomes the new accumulator value.
  - next loop executes with this new accumulator value.

*** Do not use the native reduce method ***
  
  Example: 
  const nums = [4, 1, 3];
  const add = function(a, b) { return a + b; }
  reduce(nums, add, 0); //-> 8

*/

export const reduce = (arr, cb, initVal = undefined) => {

    if (!Array.isArray(arr) && !arr.length !== 0) return null;

    let accum;
    if (initVal === undefined) {
        accum = arr[0];
        arr = arr.slice(1); // remove first element
    } else {
        accum = initVal;
    }
    
    for (let i = 0; i < arr.length; i++) {
       accum = cb(accum, arr[i]);
    }
  
    return accum;
} 


/*
unique(arr)
Write a function that accepts an array of string or numbers as an argument. 
The function should return a new array containing elements of the input array,
without duplicates.
*/

export const unique = (array) => {

  if (array.length === 0)  return null;

  let uniques = [];
  for (let i = 0; i < array.length; i++) {
      let el = array[i];
      if (!uniques.includes(el)) {
          uniques.push(el);
      }
  }
  return uniques;
};

/*
maxValue(nums)
Write a function that takes in array of numbers as an argument.
The function should return the largest number in the array.
Solve this without using any built-in array methods.
*/

export const maxValue = (nums) => {
  let largest = nums[0]
  
  for (let i=0; i < nums.length; i++) {
    if (nums[i] > largest) largest = nums[i];
  }
  
  return largest;
};

/*
factorsOf(num)
Write a function that takes in a number as an arg and return an array 
containing all positive numbers that are able to divide into num with no remainder.
*/

export const factorsOf = (num) => {

  if (num <= 0) return null;

  let factors = [];

  for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
          factors.push(i);
      }
  }

  return factors;
}

/*
isPrime(number)
Define a function that returns true if number is prime. 
Otherwise, false. A number is prime if it is only divisible by 1 and itself.
*/

export const isPrime = (num) => {

  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    // no remainder before the number means it is not a prime number
    if (num % i === 0) {
      return false;
    }
  }
  return true;

}

/*
choosePrimes(num)
Write a function that takes in an array of numbers as args. 
The function should return a new array containing the primes from the original array. 
Hint: Use the isPrime function you wrote earlier.
*/

export const choosePrimes = (nums) => {

  if (!Array.isArray(nums)) return null;
  if (nums.length === 0) return [];

  const primes = nums.filter(num => {
      if (isPrime(num)) {
        return num;
      }
   })

  return primes;
}

/*
mostVowels(sentence)
Write a function that takes in a sentence string and returns the word of the sentence
that contains the most vowels. 
Do not use the built-in .split() or join() method.
Use a helper function to count the vowels in a word.
*/

export const mostVowels = (sentence) => {

  if (!sentence) return null;
  if (typeof sentence !== 'string') return null;

  let counts = {};
  let word = '';
  let largestWord = '';
  let max = 0;

  for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') {
          if (counts[word] === undefined) {
              counts[word] = _countVowels(word);
          }
          word = '';
      } else {
          word += sentence[i];
      }
  }

  // last word
  if (counts[word] === undefined) {
      counts[word] = _countVowels(word);
  }

  for (word in counts) {
      if (counts[word] > max) {
          max = counts[word];
          largestWord = word;
      }
  }

  return largestWord;
}

const _countVowels = (word) => {

  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }

  return count;
}


/*
reverseSentence(str)
Write a function that takes in a sentence string as an arg.
The function should return a new sentence string where the order of the words is reversed.
Note that you should reverse the order among words, not the order among characters.
Ignore punctuation (,.!?).
Do not use the built-in .split(), join() or reverse method.
*/

export const reverseSentence = (sentence) =>  {
  let word = '';
  let words = []
  let newSentence = '';

  if (!sentence) return null;

  // split sentence into words and reverse order
  for (let i = sentence.length - 1; i >= 0; i--) {
       if (sentence[i] === ' ') {
            words.push(word);
            word = '';
       } else {  
           // make sure word is not reversed
          word = sentence[i] + word;
       }
  }

  // add last word
  if (word) words.push(word);

  // join words
  for (let i = 0; i < words.length; i++) {
    newSentence += words[i];
    // add space if not last word
    if (i !== words.length - 1) {
      newSentence += ' ';
    }
  }

  return newSentence;
};


/*
containsWord(sentence, word)
Write a function containsWord(sentence, targetWord) that accepts two strings as args.
The function should return a boolean indicating whether the targetWord is found inside
of the sentence. Remove punctuation and ignore capitalization.

Solve this without using String's split(), indexOf() or includes() methods.
*/

export const containsWord = (sentence, targetWord) => {

  if (!sentence || !targetWord) return null;

  let word = '';
  let words = [];
  let ignore = [".", "!", "?"]

  for (let i = 0; i < sentence.length; i++) {

    // end of sentence - with punctuation
    if (ignore.includes(sentence[i])) {
       words.push(word)
       continue;
    } 

    // end of sentence - without punctuation
    if (i === (sentence.length - 1)) {
       word += sentence[i].toLowerCase();
       words.push(word)
       continue;
    }

    // end of word
    if (sentence[i] === " ") {
         words.push(word)
         word = '';
         continue;
    } 

    // inside a word
    word += sentence[i].toLowerCase();
  }

  if (words.includes(targetWord.toLowerCase())) {
    return true;
  }

  return false;
};