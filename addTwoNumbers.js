
/**
 * Definition for singly-linked list.
 */
function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

/**
 * Create a linked list from an array.
 */
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
 * Convert linked list to array for displaying output.
 */
function linkedListToArray(head) {
    let result = [];
    let curr = head;

    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }

    return result;
}

/**
 * Add Two Numbers
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let ans = new ListNode();
    let ansHead = ans;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum =
            (!l1 ? 0 : l1.val) +
            (!l2 ? 0 : l2.val) +
            carry;

        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        let newNode = new ListNode(digit);
        ans.next = newNode;
        ans = ans.next;

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    return ansHead.next;
};

// Test input
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);

// Call the function
let result = addTwoNumbers(l1, l2);

// Display output
console.log("List 1:", linkedListToArray(l1));
console.log("List 2:", linkedListToArray(l2));
console.log("Result:", linkedListToArray(result));