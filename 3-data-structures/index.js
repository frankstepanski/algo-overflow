/*
  
Palindrome Linked List
https://leetcode.com/problems/palindrome-linked-list/

*/

export const isPalindrome = (head) => {

     // Store all values from the linked list in an array
     let valuesFound = [];
     while (head) {
         valuesFound.push(head.val);
         head = head.next;
     }

     // Check if the list of values are a palindrome
    let left = 0;
    let right = valuesFound.length - 1;
    while (left <= right) {
        if (valuesFound[left] !== valuesFound[right]) {
            return false;
        }
        left++, right--;
    }

    return true;
};

/*

Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/

Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

export const reverseList = (head) =>{

   let prev = null;
   let current = head;
 
   while(current) {
     let nextTemp = current.next;
     current.next = prev;
     prev = current;
     current = nextTemp;
   }
 
 return prev;
};
