// Модуль отправки и валидации форм
const initForms = () => {
  // Находим ВСЕ формы на странице (в модалке, внизу страницы и т.д.)
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    // 1. ВАЛИДАЦИЯ ПРИ ВВОДЕ (Запрещаем ввод не тех символов)
    const nameInput = form.querySelector('[name="user_name"]');
    const phoneInput = form.querySelector('[name="user_phone"]');
    const messageInput = form.querySelector('[name="user_message"]');

    // Кириллица и пробелы
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яё\s]/gi, '');
      });
    }

    // Цифры, "+", "(", ")", "-"
    if (phoneInput) {
      phoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9+()\-]/g, '');
      });
    }

    // Кириллица, пробелы, цифры и знаки препинания
    if (messageInput) {
      messageInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яё0-9\s.,!?:;\-"'()]/gi, '');
      });
    }

    // 2. ОТПРАВКА ФОРМЫ (async / await + fetch)
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Отменяем стандартную перезагрузку страницы

      // Собираем данные формы с помощью FormData
      const formData = new FormData(form);

      try {
        // Показываем пользователю, что идет отправка (по желанию)
        console.log('Отправка данных...');

        // Запрос на сервер (замени URL при необходимости)
        const response = await fetch('https://httpbin.org/post', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }

        const data = await response.json();
        console.log('Успешно отправлено:', data);
        alert('Спасибо! Ваше сообщение отправлено.');

        // Очищаем форму после успешной отправки
        form.reset();

      } catch (error) {
        console.error('Ошибка при отправке:', error);
        alert('Произошла ошибка при отправке. Попробуйте позже.');
      }
    });
  });
};

// Запускаем модуль после загрузки DOM
document.addEventListener('DOMContentLoaded', initForms);