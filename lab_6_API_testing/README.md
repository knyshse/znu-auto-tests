## Лабораторна робота №6. Тестування API

Тут використовується ресурс [GoRest API](https://gorest.co.in/) для демонстрації тестування REST API за допомогою бібліотек Mocha та SuperTest. GoRest API надає публічний доступ до CRUD-операцій над даними користувачів, таких як створення, читання, оновлення та видалення.

### Основні функції GoRest API, що використовуються в тестах

Тести в цієї роботи перевіряють основні методи HTTP для ресурсу користувачів:
- **POST /users** – створення нового користувача
- **GET /users** – отримання списку всіх користувачів
- **PUT /users/{user_id}** – оновлення інформації про користувача за його `id`
- **DELETE /users/{user_id}** – видалення користувача за його `id`
  
---
> **Увага**: API GoRest вимагає аутентифікації через персональний токен доступу (Bearer Token). У даних тестах наразі використовується мій особистий токен, який зашитий у коді. Зверніть увагу, що цей токен може перестати працювати в будь-який момент. Рекомендується отримати власний токен на сайті [GoRest](https://gorest.co.in/) і замінити його в тестах для стабільної роботи.


### Запуск тестів
1. Встановіть залежності:
   ```bash
   npm install
2. Запустіть тести за допомогою Mocha:
    ```bash
    npm test

### Результат роботи
![alt text](result.png)

## Контрольні запитання

1. **Наведіть види тестування.**
   - **Модульне тестування**: перевірка окремих компонентів або функцій системи ізольовано від інших компонентів.
   - **Інтеграційне тестування**: тестування взаємодії між різними компонентами або модулями, щоб переконатися, що вони працюють разом.
   - **Системне тестування**: повна перевірка всієї системи в цілому, з усіма компонентами.
   - **Приймальне тестування**: перевірка системи кінцевими користувачами або замовником для переконання, що всі вимоги виконані.
   - **Регресійне тестування**: перевірка, що зміни в коді не вплинули на існуючий функціонал.
   - **Стресове та навантажувальне тестування**: тестування системи під високим навантаженням для визначення її продуктивності та стабільності.

2. **Особливості модульного та приймального тестування.**
   - **Модульне тестування**: зосереджується на перевірці окремих функцій чи методів у коді, виконуючи тести ізольовано від решти системи. Це дозволяє швидко виявляти помилки на ранніх етапах розробки.
   - **Приймальне тестування**: проводиться на завершальних етапах, щоб перевірити відповідність системи бізнес-вимогам та очікуванням користувача. Це тестування орієнтоване на оцінку готовності продукту до релізу.

3. **Призначення бібліотек Mocha та Chai.**
   - **Mocha**: це тестовий фреймворк для JavaScript, який дозволяє організовувати та запускати тести. Mocha підтримує асинхронні тести та різні стилі тестування, такі як BDD (Behavior-Driven Development) і TDD (Test-Driven Development), що робить його універсальним і зручним для написання тестів.
   - **Chai**: це бібліотека асертацій для JavaScript, яка часто використовується з Mocha. Chai дозволяє перевіряти очікуваний результат за допомогою різних стилів асертацій, таких як `expect`, `should`, і `assert`, що робить тести більш читабельними і зрозумілими.