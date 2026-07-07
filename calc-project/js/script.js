//  №1
const title = document.getElementsByTagName('h1');

console.log(title[0]);

// №2
const headerBtn = document.getElementsByClassName('handler_btn');

console.log(headerBtn);

// №3
const btnPlus = document.querySelector('.screen-btn');

console.log(btnPlus);

// №4
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

console.log(otherItemsPercent);
console.log(otherItemsNumber);

//  №5
const rollbackRange = document.querySelector('.rollback input');

console.log(rollbackRange);

// №6
const rollbackSpan = document.querySelector('.rollback span.range-value');
console.log(rollbackSpan);

// №7
const totalInput = document.getElementsByClassName('total-input');

for (let i = 0; i < totalInput.length; i++) {
    console.log(totalInput[i]);
};

