
// LeetCode 141: Linked List Cycle

// Create a node
function Node(val) {
    this.val = val;
    this.next = null;
}

// Create a linked list
function createLinkedList(arr) {
    let head = new Node(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }

    return head;
}

// Check whether the linked list has a cycle
function hasCycle(head) {
    if (head == null) return false;

    let slow = head;
    let fast = head.next;

    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
}

// Input linked list
let head = createLinkedList([1, 2, 3, 4, 5]);

// Create a cycle: node 5 points back to node 2
let curr = head;
let secondNode = head.next;

while (curr.next !== null) {
    curr = curr.next;
}

curr.next = secondNode;

// Check for a cycle
let result = hasCycle(head);

console.log("Has Cycle:", result);