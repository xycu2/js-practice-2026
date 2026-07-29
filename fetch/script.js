function getData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Не удалось загрузить db.json");
      }
      return response.json();
    })
    .then((data) => data);
}

function sendData(url, data) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

getData("db.json")
  .then((data) => {
    return sendData("https://jsonplaceholder.typicode.com/posts", data);
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка отправки: ${response.status}`);
    }
    return response.json();
  })
  .then((result) => console.log('УСПЕХ! Ответ от сервера:', result))
  .catch((error) => console.log(`ОШИБКА ${error}`))
