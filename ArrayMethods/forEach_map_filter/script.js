const books = [
    {id: 0, price: 500},
    {id: 1, price: 1000},
    {id: 2, price: 234},
    {id: 3, price: 780}
];

// ==================================
// forEach (изменяет исходный массив)
// ==================================

// books.forEach(item => {
//     item.price = item.price + 'руб';
// })

// console.log('forEach:')
// console.log(books) // добавляем руб к каждому прайсу

// ==================================
// map() (создает новый массив на основе изначального)
// ==================================

// const newArr = books.map(item => {
//     const newObj = {
//         id: item.id
//     }
//     return newObj;
// })

// console.log('map:')
// console.log(newArr); выведится новый массив
// console.log(books); выведится изначальный массив