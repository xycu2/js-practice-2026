'use strict';

const num = 266219;
let product = 1;

const arrNums = num.toString().split("");
for (let i = 0; i < arrNums.length; i++) {
    product *= +arrNums[i]
}

console.log(product)
const result = product ** 3;

console.log(result.toString().slice(0,2));