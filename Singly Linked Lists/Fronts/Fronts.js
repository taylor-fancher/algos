class Node {
    constructor(value) {
        this.value = val;
        this.next = null
    }
}

class Sll {
    constructor() {
        this.head = null
    }
    addFront(value) {
        newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode
        return this;
    }
    removeFront() {
        if (this.head == null) {
            return this.head
        }
        removeNode = this.head;
        this.head = removeNode.next;
        return this
    }
    front() {
        if (this.head == null) {
            return null
        } else {
            var currentFront = this.head.val;
            return currentFront;
        }
    }
}