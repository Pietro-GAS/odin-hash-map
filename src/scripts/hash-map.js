export class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.elements = Array(this.capacity);
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
        const hashedKey = this.hash(key);
        if (hashedKey < 0 || hashedKey >= this.elements.length) {
            throw new Error("Trying to access index out of bounds");
        } else {
            this.elements[hashedKey] = value;
        } 
    }
}