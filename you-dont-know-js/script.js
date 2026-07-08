// №1
const book = document.querySelectorAll('.book');
const arrBooks = [];

arrBooks.push(...book);


arrBooks.sort((a, b) => {
    const aH = a.querySelector('h2 > a').textContent;
    const bH = b.querySelector('h2 > a').textContent;

    console.log(aH)
    console.log(bH)

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