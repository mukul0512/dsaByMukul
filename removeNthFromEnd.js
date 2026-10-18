
/**
 * Definition for singly-linked list.
 */
function Node(val) {
    this.val = val;
    this.next = null;
}

// Create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }

    let head = new Node(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }

    return head;
}

// Remove the Nth node from the end of the linked list
function removeNthFromEnd(head, n) {
    let sentinel = new Node(0);
    sentinel.next = head;

    let length = 0;
    let curr = head;

    // Calculate the length of the linked list
    while (curr) {
        curr = curr.next;
        length++;
    }

    // Find the position of the node before the target
    let prevPos = length - n;
    let prev = sentinel;

    for (let i = 0; i < prevPos; i++) {
        prev = prev.next;
    }

    // Remove the target node
    prev.next = prev.next.next;

    return sentinel.next;
}

// Print the linked list
function printLinkedList(head) {
    let result = [];
    let curr = head;

    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }

    console.log(result);
}

// Test case 1
let head = createLinkedList([1, 2, 3, 4, 5]);
let n = 2;

console.log("Original linked list:");
printLinkedList(head);

head = removeNthFromEnd(head, n);

console.log("After removing the nth node from the end:");
printLinkedList(head);