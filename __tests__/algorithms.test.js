import { maxValue, evenNumbers, factorsOf } from "../0-prep";

it('maxValue - return max value from array', () => {
    expect(maxValue([1,2,3,4,5])).toBe(5); 
    expect(maxValue([5,3,9,1])).toBe(9); 
    //edge cases: 
    expect(maxValue([])).toBe(undefined);
    expect(maxValue([1])).toBe(1);
});

it('evenNumbers - return array of even values', () => {
    expect(evenNumbers(11)).toEqual(expect.arrayContaining([2,4,6,8,10])); 
    expect(evenNumbers(3)).toEqual(expect.arrayContaining([2])); 
    //edge cases:
    expect(evenNumbers(0)).toEqual([]);
});

it('factorsOf - return array of factored values', () => {
    expect(evenNumbers(8)).toEqual(expect.arrayContaining([1, 2, 4, 8]));
    expect(evenNumbers(10)).toEqual(expect.arrayContaining([1, 2, 5, 10])); 
    expect(evenNumbers(2017)).toEqual(expect.arrayContaining([1, 2017])); 
    //edge cases:
    expect(evenNumbers(0)).toEqual([]);
});