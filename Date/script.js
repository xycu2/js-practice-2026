let date = new Date();

console.log(date);

console.log(date.toISOString('en').substr(0, 10));

// Date methods
console.log(Date.now());
console.log(Date.parse('22 october 1987'));

// Вывод времени с учетом локализации.
console.log(date.toLocaleDateString('en'));
console.log(date.toLocaleTimeString('en'));

// 01.01.1970 00:00:00:00
date.setFullYear(1965)

console.log(date.getTime()); // times tamp  


console.log(`Год ${date.getFullYear()}`);
console.log(`Месяц ${(date.getMonth() + 1)}`);
console.log(`Число месяца ${date.getDate()}`);
console.log(`Число недели ${date.getDay()}`);

console.log(`Часы ${date.getHours()}`);
console.log(`Минуты ${date.getMinutes()}`);
console.log(`Секунды ${date.getSeconds()}`);
console.log(`Миллисекунды ${date.getMilliseconds()}`);
