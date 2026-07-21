const country = document.getElementById('country');
const result = document.querySelector('.result');

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}

const citySelect = document.createElement('select');

function updateResult() {
    const countryText = country.options[country.selectedIndex].text || '';
    const cityText = citySelect.value

    if (countryText && cityText) {
        result.textContent = `${countryText} ${cityText}`
    }
}
country.addEventListener('change', () => {
    const val = country.value;

    citySelect.options.length = 0;

    if (cityArr[val]) {
        for(const cityName of cityArr[val]) {
            const option = document.createElement('option');
            option.textContent = cityName;
            citySelect.append(option)
        }
    }

    if (!document.body.contains(citySelect)) {
      result.before(citySelect);
    }

    updateResult();
})

citySelect.addEventListener('change', updateResult);