export class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.elements = [];
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; key++) {
            hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode
    }

    set(key, value) {
        const haskedKey = this.hash(key);
        this.elements[hashedKey] = value;
    }
}