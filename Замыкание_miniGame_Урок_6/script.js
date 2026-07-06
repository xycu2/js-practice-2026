'use strict'

function createGameNum() {

    let count = 10;
    let randomNum = Math.floor(Math.random() * 100) + 1;

    return function play() {
        const input = prompt('Угадай число от 1 до 100');

        if (input === null) {
            alert('Игра окончена')
            return
        }
    
        if (input.trim() === '' || isNaN(input)) {
            alert('Введи число!')
            return play()
        }

        const userNum = +input
    

        count--

        if (count <= 0) {
            const question = confirm('Попытки закончились, хотите сыграть еще?');
            if (question) {
                count = 10;
                randomNum = Math.floor(Math.random() * 100) + 1;
                return play();
            } else {
                alert('До свидания')
                return
            }
        }

        if (userNum > randomNum) {
            alert(`Загаданное число меньше, осталось попыток ${count}`);
            return play();
        }

        if (userNum < randomNum) {
            alert(`Загаданное число больше, осталось попыток ${count}`);
            return play();
        }

        if (userNum === randomNum) {
            alert('Поздравляю, Вы угадали!!!');
            const answer = confirm('Хотели бы сыграть еще?')
            if (answer) {
                count = 10;
                randomNum = Math.floor(Math.random() * 100) + 1;
                return play();
            } else {
                alert('До свидания!')
                return
            }
        }
    }
}

const game = createGameNum();
game()