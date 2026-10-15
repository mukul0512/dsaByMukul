// initialize a node
function Node(val) {
    this.val = val;
    this.next = null;
}
var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);    // create a node
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (this.head == null) {
        this.head = newNode;
    }
    else {
        // reach the last element
        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        // add a node
        curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;
    if (index == 0) {
        this.addAtHead(val);
        return;
    }
    else if (index == this.size) {
        this.addAtTail(val);
        return;
    }
    else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        let newNode = new Node(val);
        newNode.next = curr.next;
        curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;
    if (index == 0) {
        this.head = this.head.next;
    }
    else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
};

// Helper function to display the linked list
MyLinkedList.prototype.printList = function () {
    let curr = this.head;
    let result = [];

    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }

    console.log(result);
};

// Test the MyLinkedList implementation
var obj = new MyLinkedList();

obj.addAtHead(1);
obj.printList(); // [1]

obj.deleteAtIndex(0);
obj.printList(); // []

obj.addAtTail(2);
obj.printList(); // [2]

console.log(obj.get(0)); // 2
console.log(obj.get(1)); // -1

obj.addAtIndex(1, 3);
obj.printList(); // [2, 3]

obj.addAtIndex(1, 4);
obj.printList(); // [2, 4, 3]

obj.deleteAtIndex(1);
obj.printList(); // [2, 3]

console.log("Final size:", obj.size); // 2