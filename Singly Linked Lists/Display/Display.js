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
    display () {
        var currentNode = this.head;
        while(currentNode) {
            console.log('${currentNode.value}')
            currentNode = currentNode.next
        }
    }
}