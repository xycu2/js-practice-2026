const idTimeout = setTimeout(() => {
    console.log('Осталось 5 секунд!');
}, 5000);

document.addEventListener('click', () => {
    clearTimeout(idTimeout);
    console.log('Таймер отключен кликом!');
}, {once: true});