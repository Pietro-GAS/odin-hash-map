import { HashMap } from "./scripts/hash-map.js";

const map = new HashMap();

console.log(`hash "key": ${map.hash("key")}`);
console.log(`hash "value": ${map.hash("value")}`);