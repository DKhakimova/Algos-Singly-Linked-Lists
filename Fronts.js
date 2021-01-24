// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

class SLL {
    constructor() {
        this.head = null
    }
    addFront(value) {
        if(this.head == null) {
            this.head = new Node(value);
            return this
        } else {
            var restOfList = this.head;
            this.head = new Node(value);
            this.head.next = restOfList;
            return this
        }
    }
    removeFront() {
        this.head = this.head.next;
        return this
    }
    front() {
        return this.head.value
    }
}

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

class SLL {
    constructor() {
        this.head = null
    }
    addFront(value) {
        if(this.head == null) {
            this.head = new Node(value);
            return this
        } else {
            var restOfList = this.head;
            this.head = new Node(value);
            this.head.next = restOfList;
            return this
        }
    }
    removeFront() {
        this.head = this.head.next;
        return this
    }
    front() {
        return this.head.value
    }
}

