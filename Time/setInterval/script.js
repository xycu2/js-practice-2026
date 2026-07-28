let secondLeft = 10;

const idInterval = setInterval(() => {
    if (secondLeft > 0) {
        console.log(`До конца акции осталось: ${secondLeft--} сек`);
    } else {
        console.log('Акция завершена!')
        clearInterval(idInterval)
    }
}, 1000)