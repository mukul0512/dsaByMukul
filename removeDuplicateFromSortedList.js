// Create a Node
function Node(val) {
    this.val = val;
    this.next = null;
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

// Remove duplicates from a sorted linked list
function removeDuplicates(head) {
    let curr = head;

    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
}

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
let head = createLinkedList([1, 1, 2, 3, 3]);

console.log("Original linked list:");
printLinkedList(head);

head = removeDuplicates(head);

console.log("Linked list after removing duplicates:");
printLinkedList(head);