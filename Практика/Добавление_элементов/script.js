const list = document.querySelector('ul');
const btn = document.querySelector('button');
const input = document.querySelector('input');


btn.addEventListener('click', (e) => {
    e.preventDefault();

    const li = document.createElement('li');
    li.textContent = input.value;

    list.append(li)
    
    input.value = '';
    input.focus();
})

