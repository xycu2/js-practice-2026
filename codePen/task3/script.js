const country = document.getElementById('country');
const city = document.getElementById('city');
const result = document.querySelector('.result');

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}

function updateResult() {
    const countryText = country.options[country.selectedIndex].text
    const cityText = city.value

    if (countryText && cityText) {
        result.textContent = `${countryText} ${cityText}`
    } else {
        result.textContent = '';
    }
}