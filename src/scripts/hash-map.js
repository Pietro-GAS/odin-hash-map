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
        validateIndex(index, this.buckets.length);
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
        validateIndex(index, this.buckets.length);
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
        validateIndex(index, this.buckets.length);
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
        validateIndex(index, this.buckets.length);
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

    length() {
        let index = 0;
        let sum = 0;
        while (index < this.buckets.length) {
            validateIndex(index, this.buckets.length);
            let bucket = this.buckets[index];
            if(!bucket.head) {
                index ++;
                continue
            } else {
                let current = bucket.head;
                while(current) {
                    sum ++;
                    current = current.next;
                }
                index ++;
            }
        }
        return sum
    }

    clear() {
        let index = 0;
        while (index < this.buckets.length) {
            validateIndex(index, this.buckets.length);
            this.buckets[index] = new LinkedList();
            index ++;
        }
    }

    keys() {
        let index = 0;
        const output = [];
        while (index < this.buckets.length) {
            validateIndex(index, this.buckets.length);
            const bucket = this.buckets[index];
            if (!bucket.head) {
                index ++;
                continue
            } else {
                let current = bucket.head;
                while (current) {
                    output.push(current.value[0]);
                    current = current.next;
                }
                index ++;
            }
        }
        return output
    }

    values() {
        let index = 0;
        const output = [];
        while (index < this.buckets.length) {
            validateIndex(index, this.buckets.length);
            const bucket = this.buckets[index];
            if (!bucket.head) {
                index ++;
                continue
            } else {
                let current = bucket.head;
                while (current) {
                    output.push(current.value[1]);
                    current = current.next;
                }
                index ++;
            }
        }
        return output
    }

    entries() {
        let index = 0;
        const output = [];
        while (index < this.buckets.length) {
            validateIndex(index, this.buckets.length);
            const bucket = this.buckets[index];
            if (!bucket.head) {
                index ++;
                continue
            } else {
                let current = bucket.head;
                while (current) {
                    const entry = [current.value[0], current.value[1]];
                    output.push(entry);
                    current = current.next;
                }
                index ++;
            }
        }
        return output
    }
}

function validateIndex(index, length) {
    if (index < 0 || index >= length) {
        throw new Error("Trying to access index out of bounds");
    }
}