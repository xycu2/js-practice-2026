const user = {
    name: 'Alex',
    age: 33,
    isAuth: false,
    projects: {
        firstProject: 'firstProject',
        secondProject: 'secondProject'
    }
}

// имя переменной наследуется от объекта, его можно поменять
const {name: nameUser, age, isAuth, projects, projects: {firstProject, secondProject}} = user;

// получаем доступ к вложенным св-вам объекта и самому объекту
console.log(projects);
console.log(firstProject);
console.log(secondProject);
