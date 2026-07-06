const books = [
    {id: 0, price: 500},
    {id: 1, price: 1000},
    {id: 2, price: 234},
    {id: 3, price: 780}
];

// find
// ===================================

// const result = books.find((item, index, array) => {
//     return item.price === 1000;
// });

// console.log(result); // { id: 1, price: 1000 }

// findIndex
// ===================================

// const result = books.findIndex((item, index, array) => {
//     return item.price === 1000;
// });

// console.log(result) // 1

// books.splice(result, 1)

/*
console.log(books);

[ 
{ id: 0, price: 500 }, 
{ id: 2, price: 234 }, 
{ id: 3, price: 780 } 
]
*/