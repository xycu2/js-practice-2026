// №1
const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const btnInSquare = document.getElementById('e_btn');
const inputRange = document.getElementById('range');

btn.addEventListener('click', () => {
    const colorSquare = input.value;

    square.style.backgroundColor = `${colorSquare}`;
})

// №2
btnInSquare.style.display = 'none';

// №3

inputRange.addEventListener('input', () => {
    circle.style.height = `${inputRange.value}%`;
    circle.style.width = `${inputRange.value}%`
})