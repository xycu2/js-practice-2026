'use strict'

const week = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];

// №1
console.log(week);
week.forEach(day => console.log(day));

// №2
week.forEach((day, index) => {

    const currentDay = new Date().getDay();

    let jsDayIndex = index + 1;
    if (jsDayIndex === 7) jsDayIndex = 0;

    if (jsDayIndex === currentDay) {
        document.write(`<b>${day}</b><br>`);
    } else if (day === 'Суббота' || day === 'Воскресенье') {
        document.write(`<i>${day}</i><br>`);
    } else {
        document.write(`${day}<br>`);
    }
})

