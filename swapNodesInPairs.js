
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * Create a linked list from an array.
 */
function createLinkedList(arr) {
    let dummy = new ListNode();
    let curr = dummy;

    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }

    return dummy.next;
}

/**
 * Swap nodes in pairs using an iterative approach.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode();
    dummy.next = head;

    let prev = dummy;
    let curr = head;
    let next = head.next;

    while (curr && next) {
        // Connect the previous node to the second node
        prev.next = next;

        // Connect the first node to the node after the pair
        curr.next = next.next;

        // Swap the pair
        next.next = curr;

        // Move to the next pair
        prev = curr;
        curr = prev.next;
        next = curr && curr.next;
    }

    return dummy.next;
};

/**
 * Print the linked list.
 */
function printLinkedList(head) {
    let result = [];
    let curr = head;

    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }

    console.log(result);
}

// Test cases
let head1 = createLinkedList([1, 2, 3, 4]);
console.log("Input: [1, 2, 3, 4]");
console.log("Output:");
printLinkedList(swapPairs(head1));

let head2 = createLinkedList([1, 2, 3, 4, 5]);
console.log("\nInput: [1, 2, 3, 4, 5]");
console.log("Output:");
printLinkedList(swapPairs(head2));

let head3 = createLinkedList([1]);
console.log("\nInput: [1]");
console.log("Output:");
printLinkedList(swapPairs(head3));

let head4 = createLinkedList([]);
console.log("\nInput: []");
console.log("Output:");
printLinkedList(swapPairs(head4));