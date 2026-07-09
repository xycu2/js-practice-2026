// №1
const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const btnInSquare = document.getElementById('e_btn');

btn.addEventListener('click', () => {
    const colorSquare = input.value;

    square.style.backgroundColor = `${colorSquare}`;
})

// №2
btnInSquare.style.display = 'none';