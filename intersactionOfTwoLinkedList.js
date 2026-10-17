
/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // Store all nodes of headB inside a Set
    let store = new Set();

    while (headB) {
        store.add(headB);
        headB = headB.next;
    }

    // Check whether any node of headA exists in the Set
    while (headA) {
        if (store.has(headA)) {
            return headA;
        }
        headA = headA.next;
    }

    return null;
};

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

// Create the two linked lists with a shared node
let headA = createLinkedList([4, 1, 8, 4, 5]);
let headB = createLinkedList([5, 6, 1]);

// Find the last node of list B
let currB = headB;
while (currB.next) {
    currB = currB.next;
}

// Connect list B to the shared node (value 8) in list A
let intersectionNode = headA.next.next;
currB.next = intersectionNode;

// Call the function
let result = getIntersectionNode(headA, headB);

// Print the result
if (result) {
    console.log("Intersection at node with value:", result.val);
} else {
    console.log("No intersection");
}