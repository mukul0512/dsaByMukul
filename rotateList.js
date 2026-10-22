// Create a linked list node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
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

// Rotate the linked list to the right by k positions
var rotateRight = function (head, k) {
    if (!head || !head.next) return head;

    // Calculate the length
    let length = 0;
    let curr = head;

    while (curr) {
        curr = curr.next;
        length++;
    }

    // Avoid unnecessary rotations
    k = k % length;

    if (k === 0) return head;

    let slow = head;
    let fast = head;

    // Move fast pointer k steps ahead
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    // Find the new tail
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // Connect the old tail to the old head
    fast.next = head;

    // Set the new head and break the circular link
    let newHead = slow.next;
    slow.next = null;

    return newHead;
};

// Convert linked list to an array for display
function linkedListToArray(head) {
    let result = [];
    let curr = head;

    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }

    return result;
}

// Test cases
let head1 = createLinkedList([1, 2, 3, 4, 5]);
let k1 = 2;

console.log("Input: head = [1, 2, 3, 4, 5], k = 2");
console.log("Output:", linkedListToArray(rotateRight(head1, k1)));
// Expected: [4, 5, 1, 2, 3]

let head2 = createLinkedList([0, 1, 2]);
let k2 = 4;

console.log("\nInput: head = [0, 1, 2], k = 4");
console.log("Output:", linkedListToArray(rotateRight(head2, k2)));
// Expected: [2, 0, 1]

let head3 = createLinkedList([1]);
let k3 = 10;

console.log("\nInput: head = [1], k = 10");
console.log("Output:", linkedListToArray(rotateRight(head3, k3)));
// Expected: [1]

let head4 = createLinkedList([]);
let k4 = 3;

console.log("\nInput: head = [], k = 3");
console.log("Output:", linkedListToArray(rotateRight(head4, k4)));
// Expected: []