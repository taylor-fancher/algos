class Sll {
    constructor () {
        this.head=null
    }
    addFront(value) {
        newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode
        return this;
    }
    removeFront() {
        if (this.next == null) {
            node = null
        }
        this.next = temp
        temp = this.head
    }
    front() {
        var currentFront = this.head.val;
        return currentFront;
    }
}