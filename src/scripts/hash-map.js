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
        let index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket.head) {
            return null
        }
        let current = bucket.head;
        while(current) {
            if (current.value[0] === key) {
                return current.value[1]
            }
            current = current.next;
        }
        return null
    }
}