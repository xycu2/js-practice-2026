'use strict';

// №1 use if
const lang = prompt("write the language")

if (lang === "ru") {
    console.log("Понедельник");
    console.log("Вторник");
    console.log("Среда");
    console.log("Четверг");
    console.log("Пятница");
    console.log("Суббота");
    console.log("Воскресенье");
} else if(lang === "en") {
    console.log("Monday");
    console.log("Tuesday");
    console.log("Wednesday");
    console.log("Thursday");
    console.log("Friday");
    console.log("Saturday");
    console.log("Sunday");
} else {
    console.log("I don't know such a language");
}

// №2 use switch
switch (true) {
    case lang === "ru":
        console.log("Понедельник");
        console.log("Вторник");
        console.log("Среда");
        console.log("Четверг");
        console.log("Пятница");
        console.log("Суббота");
        console.log("Воскресенье");
        break;
    case lang === "en":
        console.log("Monday");
        console.log("Tuesday");
        console.log("Wednesday");
        console.log("Thursday");
        console.log("Friday");
        console.log("Saturday");
        console.log("Sunday");
        break;
    default: {
        console.log("I don't know such a language");
    }
}

// №3 use array
lang === "ru" 
? console.log(["Понедельник", "Вторник","Среда" ,"Четверг" ,"Пятница" ,"Суббота" , "Воскресенье"]) 
: console.log(["Monady","Tuesday" , "Wednesday","Thursday" ,"Friday" ,"Saturday" , "Sunday"])


// №4 use ternary operator
const namePerson = prompt("enter name")

namePerson === "Артем" ? console.log("Директор") : console.log("Студент")
namePerson === "Александр" ? console.log("Преподаватель") : console.log("Студент")