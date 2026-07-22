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
        this.skills = skills;
    }

    get skills() {
        return this.skills;
    }
}

const dev = new FrontEndDev('Vlad', 23);

console.log(dev)