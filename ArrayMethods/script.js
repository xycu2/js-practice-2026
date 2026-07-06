const books = [
    {id: 1, price: 500},
    {id: 2, price: 1000},
    {id: 3, price: 234},
    {id: 4, price: 780}
]
// (не изменяют исходный массив)
// ===================================

// №1 concat 
// const newArr = books.concat({id: 3, price: 450});
// console.log(newArr)

/*
{ id: 1, price: 500 },
{ id: 2, price: 1000 },
{ id: 3, price: 450 }
*/

// ===================================

// №2 slice(start, end) end - не включая
// const newArr = books.slice(0, 3) не включая 3 индекс
// console.log(newArr)

/*
{ id: 1, price: 500 },
{ id: 2, price: 1000 },
{ id: 3, price: 234 }
*/

// (изменяет исходный массив)
// ===================================

// №3 splice

// books.splice(2,3); удаляем 2 и 3 индекс
// [ { id: 1, price: 500 }, { id: 2, price: 1000 } ]


// books.splice(2,3, 'books', 'play'); добавляем books, play в массив
// [ { id: 1, price: 500 }, { id: 2, price: 1000 }, 'books', 'play' ]


// ===================================