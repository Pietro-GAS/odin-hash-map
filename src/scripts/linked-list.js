class Node {
    constructor(value=null) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            return
        }
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }

    print() {
        let current = this.head;
        let output = ``;
        while (current) {
            output += `(${current.value}) -> `;
            current = current.next;
        }
        output += `null`;
        console.log(output);
    }
}