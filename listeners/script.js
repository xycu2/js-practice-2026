// №1
const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');

btn.addEventListener('click', () => {
    const colorSquare = input.value;

    square.style.backgroundColor = `${colorSquare}`;
})
