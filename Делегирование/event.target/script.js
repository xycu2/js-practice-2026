const btnsBlock = document.querySelector('.buttons-block');
const textBlock = document.querySelector('.text-block');
const addBtn = document.getElementById('add-btn');


function btnAdd() {
    const btns = document.querySelectorAll('.btn');
    const newCount = btns.length + 1;

    const newBtn = document.createElement('button');
    newBtn.classList.add('btn');

    
    newBtn.textContent = newCount < 10 
    ? `0${newCount}`
    : newCount;
    
    btnsBlock.append(newBtn)
}

addBtn.addEventListener('click', btnAdd);


btnsBlock.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        textBlock.textContent = e.target.textContent;
    }
})

