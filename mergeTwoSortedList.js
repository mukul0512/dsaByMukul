// Create a node
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

// Merge two sorted linked lists
function mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    // let curr = null;
    // if (list1.val < list2.val) {
    //     curr = list1;
    //     list1 = list1.next;
    // } else {
    //     curr = list2;
    //     list2 = list2.next;
    // }
    // let start = curr;
    let start = new ListNode();
    let curr = start;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }

        curr = curr.next;
    }

    if (!list1) {
        curr.next = list2;
    }

    if (!list2) {
        curr.next = list1;
    }

    // return start;
    return start.next;
}

// Print a linked list as an array
function printLinkedList(head) {
    let result = [];
    let curr = head;

    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }

    console.log(result);
}

// Test the program
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);

console.log("List 1:");
printLinkedList(list1);

console.log("List 2:");
printLinkedList(list2);

let mergedList = mergeTwoLists(list1, list2);

console.log("Merged List:");
printLinkedList(mergedList);