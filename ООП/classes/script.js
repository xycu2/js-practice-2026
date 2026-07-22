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

    test() {
        super.sayHello();
    }
}

const dev = new FrontEndDev('Vlad', 23);
dev.test()
console.log(dev)