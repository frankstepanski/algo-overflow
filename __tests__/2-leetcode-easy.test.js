import { 
    fizzBuzz,
    addDigits,
    twoSum,
    validPalindrome,
    validAnagram,
    romanToInt,
    validParentheses,
    findDifference

} from "../1-leetcode-easy";

it('fizzBuzz - returns "FizzBuzz" or "Fizz" or "Buzz" or i', () => {
   
    const input1 = 15;
    const input2 = 5;
    const input3 = 3;

    expect(fizzBuzz(input1)).toStrictEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
    expect(fizzBuzz(input2)).toStrictEqual(["1","2","Fizz","4","Buzz"]);
    expect(fizzBuzz(input3)).toStrictEqual(["1","2","Fizz"])
    // edge cases:
    expect(fizzBuzz([])).toStrictEqual(null);
});

it('addDigits - sum digits until 1 digit left and return the final digit', () => {
    
    // 49 => 9 + 4 = 13 => 1 + 3 = 4
    expect(addDigits(49)).toBe(4);
    // 48 => 8 + 4 => 12 => 1 + 2 = 3
    expect(addDigits(48)).toBe(3);
    // 24 => 4 + 2 => 6
    expect(addDigits(24)).toBe(6);
 
    // edge cases:
    expect(addDigits(0)).toEqual(0);
});

it('twoSum - return array of two indices that add up to target', () => {
    
    // https://www.youtube.com/watch?v=NLhkpg9p7VQ

    expect(twoSum([2,3,7,3,9,1],10)).toStrictEqual([1,2]);
    expect(twoSum([2,3,7,3,9,1],3)).toStrictEqual([0,5]);
 
    // edge cases:
    //expect(evaluateObj(0)).toEqual(0);
});

it('validPalindrome - return true if valid palindrome', () => {

    expect(validPalindrome("boot")).toBeFalsy();
    expect(validPalindrome("racecar")).toBeTruthy();
    expect(validPalindrome("A santa lived as a devil at NASA")).toBeTruthy();
 
    // edge cases (empty string is a palindrome):
    expect(validPalindrome("")).toBeTruthy();
});

it('validAnagram - return true one string if an anagram of the other', () => {

    expect(validAnagram("anagram", "nagaram")).toBeTruthy();
    expect(validAnagram("rat", "car")).toBeFalsy();
 
    expect(validAnagram("", "")).toBeFalsy();
});

it('romanToInteger - returns numeric value of roman numerials', () => {

    expect(romanToInt("XV")).toBe(15);
    expect(romanToInt("XLIX")).toBe(49);
    expect(romanToInt("IV")).toBe(4);
 
    expect(romanToInt("")).toBe(0);
});

it('validParentheses - returns true if string has only valid parentheses set', () => {

    // https://www.youtube.com/watch?v=OxbxP5_-Tcs

    expect(validParentheses("()[]{}")).toBeTruthy();
    expect(validParentheses("(]")).toBeFalsy();
    expect(validParentheses("([)]")).toBeFalsy();

});

it('findDifference - returns true if string has only valid parentheses set', () => {

    expect(findDifference([1,2,3,3], [1,1,2,2])).toStrictEqual([[3],[]]);
    expect(findDifference([1,2,3], [2,4,6])).toStrictEqual([[1,3],[4,6]]);
    expect(findDifference([1,2,3], [1,2,3])).toStrictEqual([[],[]]);
    
    expect(findDifference([], [])).toStrictEqual([[],[]]);
});