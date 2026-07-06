const books = [
    {id: 0, price: 500},
    {id: 1, price: 1000},
    {id: 2, price: 234},
    {id: 3, price: 780},
    {id: 4, price: 500}
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


// ==================================
// filter (создет новые массив, туда пройдут только те элементы , которые пройдут условие)
// ==================================

// const newArr = books.filter(item => {
//     return item.price === 500;
// })

// console.log(newArr) // [ { id: 0, price: 500 }, { id: 4, price: 500 } ]