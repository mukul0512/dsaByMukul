
/**
 * Definition for singly-linked list.
 */
function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

// Create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }

    let head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
}

// Remove the Nth node from the end using the two-pointer approach
var removeNthFromEnd = function (head, n) {
    // Add a sentinel node at the start
    let sentinel = new ListNode();
    sentinel.next = head;

    // Move the first pointer ahead by n nodes
    let first = sentinel;

    for (let i = 0; i < n; i++) {
        first = first.next;
    }

    // Move both pointers until first reaches the last node
    let second = sentinel;

    while (first.next !== null) {
        second = second.next;
        first = first.next;
    }

    // Delete the Nth node from the end
    second.next = second.next.next;

    return sentinel.next;
};

// Print the linked list
function printLinkedList(head) {
    let result = [];
    let curr = head;

    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }

    console.log(result);
};

// Test case
let head = createLinkedList([1, 2, 3, 4, 5]);
let n = 2;

console.log("Original linked list:");
printLinkedList(head);

head = removeNthFromEnd(head, n);

console.log("After removing the nth node from the end:");
printLinkedList(head);