import { HashMap } from "./scripts/hash-map.js";

const map = new HashMap();

console.log(`hash "key1": ${map.hash("key1")}`);
console.log(`hash "key2": ${map.hash("key2")}\n`);

console.log(`hashmap before setting:`);
for(let i = 0; i < map.buckets.length; i++) {
    map.buckets[i].print();
}
console.log(`map length before setting: ${map.length()}`);
console.log(`keys before setting: ${map.keys()}`);
console.log(`values before setting: ${map.values()}`);
console.log(`entries before setting: ${map.entries()}\n`);

map.set("key1", "value1");
map.set("key2", "value2");
console.log(`hashmap after setting:`)
for(let i = 0; i < map.buckets.length; i++) {
    map.buckets[i].print();
};
console.log(`map length after setting: ${map.length()}`);
console.log(`keys after setting: ${map.keys()}`);
console.log(`values after setting: ${map.values()}`);
console.log(`entries after setting: ${map.entries()}\n`);

map.set("key2", "newValue2");
for(let i = 0; i < map.buckets.length; i++) {
    map.buckets[i].print();
};
console.log(`map length after changing "key2" value: ${map.length()}\n`);

console.log(`value associated to "key2": ${map.get("key2")}`);
console.log(`value associated to "key3": ${map.get("key3")}\n`);

console.log(`map contains "key2": ${map.has("key2")}`);
console.log(`map contains "key3": ${map.has("key3")}\n`);

map.remove("key1");
console.log(`map after removing "key1:"`);
for(let i = 0; i < map.buckets.length; i++) {
    map.buckets[i].print();
};
console.log(`map length after removing "key1": ${map.length()}`);
console.log(`keys after removing "key1": ${map.keys()}`);
console.log(`values after removing "key1": ${map.values()}`);
console.log(`entries after removing "key1": ${map.entries()}\n`);

map.clear();
console.log(`map after clearing:"`);
for(let i = 0; i < map.buckets.length; i++) {
    map.buckets[i].print();
};
console.log(`map length after clearing: ${map.length()}`);
console.log(`keys after clearing: ${map.keys()}`);
console.log(`values after clearing: ${map.values()}`);
console.log(`entries after clearing: ${map.entries()}\n`);