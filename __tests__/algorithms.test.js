import { maxValue, isPrime, choosePrimes, mostVowels, factorsOf } from "../0-prep";

it('maxValue - return max value from array', () => {
    expect(maxValue([1,2,3,4,5])).toBe(5); 
    expect(maxValue([5,3,9,1])).toBe(9); 
    //edge cases: 
    expect(maxValue([])).toBe(undefined);
    expect(maxValue([1])).toBe(1);
});

it('isPrime - return true for if prime, otherwise false', () => {
    expect(isPrime(4)).toBe(false); 
    expect(isPrime(12)).toBe(false);
    expect(isPrime(11)).toBe(true);
    //edge cases: 
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
});

it('choosePrimes - returns an array of prime numbers', () => {
   
    const nums = [2,4,7,9,11,12,50]
    const expected = [2,7,11]

    expect(choosePrimes(nums)).toEqual(expect.arrayContaining(expected));
    // edge cases:
    expect(choosePrimes([1,4,6,8,10])).toEqual([]);
    expect(choosePrimes([])).toEqual([]);
    expect(choosePrimes(2)).toEqual(null);

});

it('mostVowels - returns string with most vowels', () => {
   
    const sentence = "this is a wonderful algorithm"
    const expected = "wonderful"

    expect(mostVowels(sentence)).toEqual(expected);
    // edge cases:
    expect(mostVowels("")).toEqual(null);
    expect(mostVowels(10)).toEqual(null);
    expect(choosePrimes("abcd")).toEqual(null);

});

/*
it('factorsOf - return array of factored values', () => {
    expect(evenNumbers(8)).toEqual(expect.arrayContaining([1, 2, 4, 8]));
    expect(evenNumbers(10)).toEqual(expect.arrayContaining([1, 2, 5, 10])); 
    expect(evenNumbers(2017)).toEqual(expect.arrayContaining([1, 2017])); 
    //edge cases:
    expect(evenNumbers(0)).toEqual([]);
});
*/