const names = ['artem', 'max', 'vasya', ['petya', 'alex']];

// получаем доступ к вложенным св-вам массива
const [art, max, vasya, [petya, alex]] = names;

console.log(art);
console.log(max);
console.log(vasya);

// выводим их в консоль
console.log(petya);
console.log(alex);
