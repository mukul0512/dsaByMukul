/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
}

/**
 * Group odd-indexed nodes followed by even-indexed nodes.
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head || !head.next) return head;

    let odd = head;
    let even = head.next;
    let evenStart = even;

    while (odd.next && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;

        odd = odd.next;
        even = even.next;
    }

    odd.next = evenStart;

    return head;
};

// Print the linked list
function printLinkedList(head) {
    let curr = head;
    let result = [];

    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }

    console.log(result);
}

// Test the code
let head = createLinkedList([1, 2, 3, 4, 5]);

console.log("Original linked list:");
printLinkedList(head);

head = oddEvenList(head);

console.log("After odd-even grouping:");
printLinkedList(head);