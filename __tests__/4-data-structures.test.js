import { 
    isPalindrome,
  

} from "../4-data-structures";

it('isPalindrome - given head of singly linked list, return true is palindrome', () => {
  
    expect(isPalindrome([1,2,2,1])).toBe(true);
    expect(isPalindrome([1,2])).toBe(false);
    // edge cases:
    expect(repeater('')).toBe('');
});