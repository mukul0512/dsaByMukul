/**
 * Definition for singly-linked list.
 */
function Node(val, next = null) {
    this.val = val;
    this.next = next;
}

// Create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new Node(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }

    return head;
}

// Check whether the linked list is a palindrome
function isPalindrome(head) {
    // Finding the middle element
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    let prev = null;
    let curr = slow;

    while (curr !== null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // Checking for palindrome
    let firstList = head;
    let secondList = prev;

    while (secondList !== null) {
        if (firstList.val !== secondList.val) {
            return false;
        }

        firstList = firstList.next;
        secondList = secondList.next;
    }

    return true;
}

// Test cases
let head1 = createLinkedList([1, 2, 2, 1]);
let head2 = createLinkedList([1, 2]);
let head3 = createLinkedList([1]);
let head4 = createLinkedList([1, 2, 3, 2, 1]);

console.log("Input: [1, 2, 2, 1]");
console.log("Output:", isPalindrome(head1));

console.log("\nInput: [1, 2]");
console.log("Output:", isPalindrome(head2));

console.log("\nInput: [1]");
console.log("Output:", isPalindrome(head3));

console.log("\nInput: [1, 2, 3, 2, 1]");
console.log("Output:", isPalindrome(head4));