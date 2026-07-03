// №1
let screenPrice;
let screenPrice1;

do {
    screenPrice = +prompt("Сколько будет стоить первая работа?");
} while(isNaN(screenPrice) || screenPrice === null || screenPrice <= 0)

do {
    screenPrice1 = +prompt("Сколько будет стоить вторая работа?");
} while (isNaN(screenPrice1) || screenPrice1 === null || screenPrice1 <= 0)

// №2

const getAllServicePrices = function(service, service1) {
    if ((typeof service === "number") && (typeof service1 === "number")) {
        return service + service1;
    }
    return "Ошибка, переданы не числа!"
}
const allServicePrices = getAllServicePrices(screenPrice, screenPrice1);
console.log(allServicePrices)