import { 
    isPalindrome,
    reverseList
  
} from "../3-data-structures";

it('isPalindrome - given head of singly linked list, return true is palindrome', () => {
  
    // https://duncan-mcardle.medium.com/leetcode-problem-234-palindrome-linked-list-javascript-fc7293155c11
    // https://www.youtube.com/watch?v=LBD8rIjVxZI

    

    expect(isPalindrome([1,2,2,1])).toBe(true);
    expect(isPalindrome([1,2])).toBe(false);
    expect(isPalindrome([1,2,3,2,1])).toBeTruthy();
});

it('reverseList - given head of singly linked list, reverse and return the list', () => {

    expect(reverseList([1,2,3,4,5])).toStrictEqual([5,4,3,2,1]);
    expect(reverseList([1,2])).toBeStrictEqual([2,1]);
    // edge cases:
    expect(reverseList([])).toBe([]);
});