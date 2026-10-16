// Create a node
function Node(val) {
    this.val = val;
    this.next = null;
}

// Create a linked list from an array
function createLinkedList(arr) {
    let head = new Node(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }

    return head;
}
// Reverse a linked list
function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    head = prev;
    return head;
}

// Print the linked list as an array
function printList(head) {
    let result = [];
    let curr = head;

    while (curr != null) {
        result.push(curr.val);
        curr = curr.next;
    }

    return result;
}
// Input linked list
let head = createLinkedList([1, 2, 3, 4, 5]);

console.log("Original List:", printList(head));
// Reverse and store the returned head
let result = reverseList(head);
console.log("Reversed List:", printList(result));