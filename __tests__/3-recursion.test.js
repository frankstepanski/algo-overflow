import { 
    repeater,
    factorial,
    getLength,
    shuffleCards

} from "../2-bigO";

it('repeater - returns input character 5 times', () => {
  
    expect(repeater('g')).toBe('ggggg');
    // edge cases:
    expect(repeater('')).toBe('');
});

it('factorial - return factorial of input', () => {
  
    expect(factorial(4)).toBe(24);
    expect(factorial(1)).toBe(1);
    // edge cases:
    expect(factorial(0)).toBe(1);
});

it('getLength - return length of an array', () => {
  
    expect(getLength([1,2,3,4])).toBe(4);
    expect(getLength([1])).toBe(1);
    // edge cases:
    expect(getLength([])).toBe(0);
});

it('shuffleCards - return shuffled array of cards from two arrays', () => {
  
    expect(shuffleCards([1,2,3,4], [5,6])).toStrictEqual([1,5,2,6,3,4]);

});