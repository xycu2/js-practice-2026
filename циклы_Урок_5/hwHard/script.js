// №1

const arr = ["2453","45645","334","235","556","5224","756"];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "2" || arr[i][0] === "4") {
        console.log(arr[i])
    }
}


// №2

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(`${i} - делители этого числа: 1 и ${i}`)
    }
}