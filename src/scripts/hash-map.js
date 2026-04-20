import { LinkedList } from "./linked-list.js";

export class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = []
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = new LinkedList();
        }
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode
    }

    set(key, value) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        const bucket = this.buckets[index];
        if(!bucket.head) {
            bucket.append([key, value]);
        } else {
            let current = bucket.head;
            while(current) {
                if(current.value[0] === key) {
                    current.value[1] = value;
                    return
                }
                current = current.next;
            }
            bucket.append([key, value]);
        }
    }

    get(key) {
        if(!this.has(key)) {
            return null
        }
        let index = this.hash(key);
        const bucket = this.buckets[index];
        let current = bucket.head;
        while(current) {
            if (current.value[0] === key) {
                return current.value[1]
            }
            current = current.next;
        }

    }

    has(key) {
        let index = this.hash(key);
        const bucket = this.buckets[index];
        if(!bucket.head) {
            return false
        }
        let current = bucket.head;
        while (current) {
            if (current.value[0] === key) {
                return true
            }
            current = current.next;
        }
        return false
    }

    remove(key) {
        if (!this.has(key)) {
            return false
        }
        let index = this.hash(key);
        const bucket = this.buckets[index];
        // If the key is in the head of the bucket, remove it and reassign head
        if (bucket.head.value[0] === key) {
            bucket.head = bucket.head.next;
            return true
        }
        let current = bucket.head;
        let prev = null;
        // skip over the elements with a different key
        while (current && current.value[0] !== key) {
            prev = current;
            current = current.next;
        }
        // remove the key by reassigning the next property of the previous element
        prev.next = current.next;
        return true;
    }
}