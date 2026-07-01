const num = 266219;
let sum = 1;

const arrNums = num.toString().split("");
for (let i = 0; i < arrNums.length; i++) {
    sum *= +arrNums[i]
}

console.log(sum)
console.log(sum ** 3)
const arrNewNum = (sum ** 3).toString().split("")
console.log(arrNewNum[0], arrNewNum[1])
