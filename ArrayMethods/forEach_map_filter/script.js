const books = [
    {id: 0, price: 500},
    {id: 1, price: 1000},
    {id: 2, price: 234},
    {id: 3, price: 780}
];

// forEach (изменяет исходный массив)
books.forEach(item => {
    item.price = item.price + 'руб';
})

console.log('forEach:')
console.log(books) // добавляем руб к каждому прайсу