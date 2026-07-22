// spread
const firstAr = [1,2,3,4];
const secondAr = [5,6,7,8];

console.log([...firstAr, ...secondAr]);
// можем добавлять другие числа
console.log([14, 56, 44,...firstAr, ...secondAr, 12, 122, 11]);