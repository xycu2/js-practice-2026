class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    sayHello() {
        console.log(`Привет, меня зовут ${this.name}!`)
    }
}

class FrontEndDev extends Person {
    constructor(name, age, skills = []) {
        super(name, age);
        this._skills = skills;
    }

    // getter получает значение св-ва, "_" - приватное св-во , только чтение
    get skills() {
        return this._skills;
    }

    // setter записывает в св-во значение
    set skills(str) {
        this.skills.push(str)
    }
}

const dev = new FrontEndDev('Vlad', 23);

dev.skills = 'Первое свойство';
dev.skills = 'Второе свойство';
dev.skills = 'Третье свойство';

console.log(dev)