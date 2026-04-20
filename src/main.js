import { HashMap } from "./scripts/hash-map.js";

const map = new HashMap();

console.log(`hash "key1": ${map.hash("key1")}`);
console.log(`hash "key2": ${map.hash("key2")}\n`);

console.log(`hashmap before setting:`);
for(let i = 0; i < map.buckets.length; i++) {
    map.buckets[i].print();
}
map.set("key1", "value1");
map.set("key2", "value2");
console.log(`hashmap after setting:`)
for(let i = 0; i < map.buckets.length; i++) {
    map.buckets[i].print();
};
map.set("key2", "newValue2");
for(let i = 0; i < map.buckets.length; i++) {
    map.buckets[i].print();
};

console.log(`value associated to "key2": ${map.get("key2")}`);
console.log(`value associated to "key3": ${map.get("key3")}\n`);

console.log(`map contains "key2": ${map.has("key2")}`);
console.log(`map contains "key3": ${map.has("key3")}\n`);
