const title = "js-practice-2026";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 7;
const rollback = 44;
const fullPrice = 100000;
const adaptive = true;

// №1
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// №2
console.log(screens.length);

// №3
console.log(`Стоимость верстки экранов ${screenPrice} рублей/долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/долларов/гривен/юани`);

// №4
console.log(screens.toLocaleLowerCase());
console.log(screens.split(", "))

// №5
console.log(fullPrice  * (rollback/100))
