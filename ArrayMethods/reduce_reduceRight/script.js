const books = [
    {id: 0, price: 500},
    {id: 1, price: 1000},
    {id: 2, price: 234},
    {id: 3, price: 780},
    {id: 4, price: 500}
];

// ==================================
// reduce
// ==================================

const resultReduce = books.reduce((acc, item) => {
    return acc + item.price;
}, 0)

console.log(resultReduce); // 3014

// ==================================
// reduceRight
// ==================================

const resultReduceRight = books.reduceRight((acc, item) => {
    return acc + item.price;
}, 0)

console.log(resultReduceRight); // 3014