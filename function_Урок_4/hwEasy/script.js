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
