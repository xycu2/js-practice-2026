// №1
const book = document.querySelectorAll('.book');
const arrBooks = [];


arrBooks.push(...book);


arrBooks.sort((a, b) => {
    const aH = a.querySelector('h2 > a').textContent;
    const bH = b.querySelector('h2 > a').textContent;
    

    const cleanA = aH.trim(); 
    const cleanB = bH.trim();

    const numAh = parseInt(cleanA.split(' ')[1]);
    const numBh = parseInt(cleanB.split(' ')[1]);

    

    return numAh - numBh;
})

const aside = document.querySelector('.books');

arrBooks.forEach(item => {
    aside.appendChild(item);
})

// №2
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// №3


const bookTitle = document.querySelectorAll('.book > h2');

bookTitle[2].textContent = 'Книга 3. this и Прототипы Объектов';

// №4
const advertising = document.querySelector('.adv');

advertising.style.display = 'none';

// №5

function sortList(bookElement) {
    const listItems = bookElement.querySelectorAll('li');
    const arrayLi = [...listItems];

    arrayLi.sort((a, b) => {
        const txcA = a.textContent.trim();
        const txcB = b.textContent.trim();
    
        function getOrderWeight(text) {
            if (text.startsWith('Введение')) return 1;
            if (text.startsWith('Предисловие')) return 2;
            
            if (text.startsWith('Глава')) {
                const number = parseInt(text.replace(/[^\d]/g, ''), 10);
                return 10 + number;
            }
    
            if (text.startsWith('Приложение')) {
                const letter = text.split(' ')[1].replace(':', '');
                return 100 + letter.charCodeAt(0);
            }
    
            return 999;
        }
        
    
        return getOrderWeight(txcA) - getOrderWeight(txcB);
    })

    const container = bookElement.querySelector('ul');
    arrayLi.forEach(item => container.appendChild(item));
}



sortList(arrBooks[1]);
sortList(arrBooks[4]);


// №6
const liSix = arrBooks[5].querySelectorAll('li');
const arrLiSix = [...liSix]; 


const li = document.createElement('li');
li.textContent  = 'Глава 8: За пределами ES6';

arrLiSix.at(-1).insertAdjacentElement('beforebegin', li);
arrLiSix.push(li);
