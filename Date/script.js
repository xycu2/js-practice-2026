const days = ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
const logData = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const dayNow = now.getDay();


    if (hours >= 6 && hours <= 11) {
        console.log('Доброе утро');
    } else if (hours >= 12 && hours <= 17) {
        console.log('Добрый день');
    } else if (hours >= 18 && hours <= 22) {
        console.log('Добрый вечер');
    } else {
        console.log('Доброй ночи');
    }

    console.log(`Сегодня: ${days[dayNow]}`);

    const hourStr = hours < 10 ? `0${hours}` : hours;
    const minuteStr = minutes < 10 ? `0${minutes}` : minutes;
    const secondStr = seconds < 10 ? `0${seconds}` : seconds;

    console.log(`Текущее время: ${hourStr}:${minuteStr}:${secondStr} PM`);
    
    const nextYear = now.getFullYear() + 1;
    const newYearDate = new Date(`1 Jan ${nextYear}`);

    const diffMs = newYearDate - now;
    const daysToNewYear = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    console.log(`До нового года осталось ${daysToNewYear} дней`);
    
}
logData();