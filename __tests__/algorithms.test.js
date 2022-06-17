import { 
            maxValue,
            factorsOf,
            isPrime,
            choosePrimes,
            mostVowels,
            unique,
            reverseSentence,
            containsWord,
            evaluateObj,
            map,

} from "../0-prep";

it('evaluateObj - returns total value of number property values', () => {
   
    const input = {
        hello: 'there',
        you: 8,
        are: 7,
        almost: '10',
        done: '!'
      };

    expect(evaluateObj(input)).toBe(15);
    // edge cases:
    expect(evaluateObj("hello")).toEqual(null);
    expect(evaluateObj({})).toEqual(null);

});
it('maxValue - return max value from array', () => {

    expect(maxValue([1,2,3,4,5])).toBe(5); 
    expect(maxValue([5,3,9,1])).toBe(9); 
    //edge cases: 
    expect(maxValue([])).toBe(undefined);
    expect(maxValue([1])).toBe(1);
});

it('map - takes array and callback and returns new array', () => {
   
    const arr = [1,2,3,4,5];  
    const cb1 = (x) => x * 2; 
    const cb2= (x) => x + 2; 

    expect(map(arr, cb1)).toEqual([2,4,6,8,10]);
    expect(map(arr, cb2)).toEqual([3,4,5,6,7]);

    // edge cases:
    expect(map([], cb1)).toEqual(null);

});

it('factorsOf - return array of factored values', () => {
    
    expect(factorsOf(8)).toEqual(expect.arrayContaining([1, 2, 4, 8]));
    expect(factorsOf(10)).toEqual(expect.arrayContaining([1, 2, 5, 10])); 
    expect(factorsOf(2017)).toEqual(expect.arrayContaining([1, 2017])); 
    //edge cases:
    expect(factorsOf(0)).toEqual(null);
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
   
    const input = [2,4,7,9,11,12,50]
    const expected = [2,7,11]

    expect(choosePrimes(input)).toEqual(expect.arrayContaining(expected));
    // edge cases:
    expect(choosePrimes([1,4,6,8,10])).toEqual([]);
    expect(choosePrimes([])).toEqual([]);
    expect(choosePrimes(2)).toEqual(null);
});

it('mostVowels - returns string with most vowels', () => {
   
    const input = "this is a wonderful algorithm"
    const expected = "wonderful"

    expect(mostVowels(input)).toEqual(expected);
    // edge cases:
    expect(mostVowels("")).toEqual(null);
    expect(mostVowels(10)).toEqual(null);
    expect(choosePrimes("abcd")).toEqual(null);
});

it('unqiue - returns array of unique values', () => {
   
    const input = [4, 9, "r", 3, 4, "r", "t", 0, 9];
    const expected = [4, 9, "r", 3, "t", 0]

    expect(unique(input)).toEqual(expected);
    // edge cases:
    expect(unique([])).toEqual(null);

});
it('reverseSentence - reverses the words in a sentence (not characters)', () => {
   
    const input = "This is a wonderful algorithm";
    const expected = "algorithm wonderful a is This"

    expect(reverseSentence(input)).toEqual(expected);
    // edge cases:
    expect(reverseSentence("")).toEqual(null);

});

it('containsWord - returns true if word is found in sentence (ignores punctuation)', () => {
   
    const input1 = "This is a wonderful algorithm!";
    const input2 = "algorithm";

    expect(containsWord(input1, input2)).toBeTruthy();

    // edge cases:
    expect(reverseSentence("")).toEqual(null);

});
