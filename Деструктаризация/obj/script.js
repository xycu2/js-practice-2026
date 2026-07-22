const user = {
    name: 'Alex',
    age: 33,
    isAuth: false
}

// имя переменной наследуется от объекта, его можно поменять
const {name: nameUser, age, isAuth} = user;

console.log(nameUser);
console.log(age);
console.log(isAuth);
