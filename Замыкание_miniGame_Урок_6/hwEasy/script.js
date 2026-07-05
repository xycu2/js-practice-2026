'use strict'

function createGameNum() {

    const randomNum = Math.floor(Math.random() * 100) + 1;

    return function play() {
        const input = prompt('Угадай число от 1 до 100');

        if (input === null) {
            alert('Игра окончена')
            return
        }
    
        const userNum = +input
    
        if (input.trim() === '' || isNaN(input)) {
            alert('Введи число!')
            return play()
        }

        if (userNum > randomNum) {
            alert('Загаданное число меньше');
            return play();
        }

        if (userNum < randomNum) {
            alert('Загаданное число больше');
            return play();
        }

        if (userNum === randomNum) {
            alert('Поздравляю, Вы угадали!!!');
        }
    }
}

const game = createGameNum();
game()