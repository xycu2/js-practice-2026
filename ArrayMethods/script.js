const books = [
    {id: 1, price: 500},
    {id: 2, price: 1000},
    {id: 3, price: 234},
    {id: 4, price: 780}
]

// №1 concat
// const newArr = books.concat({id: 3, price: 450});
// console.log(newArr)

/*
{ id: 1, price: 500 },
{ id: 2, price: 1000 },
{ id: 3, price: 450 }
*/


// №2 slice(start, end) end - не включая
// const newArr = books.slice(0, 3) не включая 3 индекс
// console.log(newArr)

/*
{ id: 1, price: 500 },
{ id: 2, price: 1000 },
{ id: 3, price: 234 }
*/