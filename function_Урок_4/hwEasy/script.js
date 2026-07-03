// №1
const getAllServicePrices = function(service, service1) {
    return service + service1;
}
const allServicePrices = getAllServicePrices(500, 600);


// №2
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}
const fullPrice = getFullPrice(150, 450);

// №3
const getTitle = function(title) {
    const cleanTitle = title.trim();

    if (!cleanTitle) return cleanTitle;

    return cleanTitle[0].toLocaleUpperCase() + cleanTitle.slice(1).toLocaleLowerCase();
}
console.log(getTitle(" КаЛьКулятор Верстки"))

// №4
const getServicePercentPrices = function(totalSum, amoutSum) {
    return totalSum - amoutSum;
}

const servicePercentPrice = getServicePercentPrices(350, 150);

// №5
const getRollbackMessage = function() {
    return "Вам предоставлена скидка"
} 

const showType = function(screens, callGetRollbackMessage, callGetServicePercentPrices) {
    console.log(screens);
    console.log(callGetRollbackMessage());
    console.log(callGetServicePercentPrices(400, 100));
}

showType("fullHD", getRollbackMessage, getServicePercentPrices)