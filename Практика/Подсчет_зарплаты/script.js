const price = +prompt("Сколько ты хочешь зарабатывать в месяц (в рублях)");
const wordDays = +prompt("Сколько дней в неделю ты готов работать?");
const hours = +prompt("Сколько часов в день ты готов кодить?");

if (isNaN(price) || isNaN(wordDays) || isNaN(hours) || price === 0 || wordDays === 0 || hours === 0) {
    alert('Вводи только корректные цифры, бро! И не оставляй поля пустыми.')
} else {
    const totalHoursInMonth = hours * wordDays * 4.3;

    const oneHoursPrice = price / totalHoursInMonth;

    const projectPrice = Math.round(oneHoursPrice * 15);
    
    
    alert(
      `При твоем графике стоимость одного часа работы составляет: ${Math.round(oneHoursPrice)} рублей. Чтобы заработать на верстке сайта, на который уйдет 15 часов, бери с клиента не меньше ${projectPrice} рублей!`,
    );
}



