const days = ['Воскресенье','Понеделник','Вторник','Среда','Четверг','Пятница','Суббота']
const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

// функция проверки часов
function declensionHours(hours) {
    if ((hours >= 2 && hours <= 4) || (hours >= 22 && hours <= 24)) {
        return `${hours} часа` 
    } else if (hours >= 5 && hours <= 20) {
        return `${hours} часов`
    } else {
        return `${hours} час`
    }
}

// функция , которая добавляет 0 перед одиночной цифрой
function correctTime(time) {
    return String(time).padStart(2, '0')
}

const uptade = setInterval(() => {
    const date = new Date(); // текущая дата

    const dateNum = date.getDate(); // число
    const month = date.getMonth(); // месяц
    const day = date.getDay(); // день недели
    const year = date.getFullYear(); // год

    const hours = date.getHours(); // часы
    const minutes = date.getMinutes(); // минуты
    const seconds = date.getSeconds(); // секунды

    console.log(`Сегодня ${days[day]}, ${dateNum} ${months[month]} ${year} года, ${declensionHours(hours)} ${minutes} минут ${seconds} секунды`);
    console.log(`${correctTime(day)}:${correctTime(month + 1)}:${year} - ${correctTime(hours)}:${correctTime(minutes)}:${correctTime(seconds)}`);

}, 1000)