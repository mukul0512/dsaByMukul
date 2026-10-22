
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * Swap every two adjacent nodes in a linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let left = head;
    let right = head.next;

    left.next = swapPairs(right.next);
    right.next = left;

    return right;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
}

// Helper function to print the linked list
function printLinkedList(head) {
    let result = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    console.log(result);
}

// Test cases
let head1 = createLinkedList([1, 2, 3, 4]);
console.log("Input:  [1, 2, 3, 4]");
console.log("Output:");
printLinkedList(swapPairs(head1));

let head2 = createLinkedList([1, 2, 3, 4, 5]);
console.log("\nInput:  [1, 2, 3, 4, 5]");
console.log("Output:");
printLinkedList(swapPairs(head2));

let head3 = createLinkedList([1]);
console.log("\nInput:  [1]");
console.log("Output:");
printLinkedList(swapPairs(head3));

let head4 = createLinkedList([]);
console.log("\nInput:  []");
console.log("Output:");
printLinkedList(swapPairs(head4));