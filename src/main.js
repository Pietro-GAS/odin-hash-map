import { HashMap } from "./scripts/hash-map.js";

const map = new HashMap();

console.log(`hash "key1": ${map.hash("key1")}`);
console.log(`hash "key2": ${map.hash("key2")}\n`);

console.log(`hashmap before setting: ${map.elements}`);
map.set("key1", "value1");
map.set("key2", "value2");
console.log(`hashmap after setting: ${map.elements}`);

