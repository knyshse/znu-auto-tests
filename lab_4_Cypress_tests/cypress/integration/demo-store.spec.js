describe('Тестування функціоналу сайту http://demo-store.seleniumacademy.com', () => {
  
    it('Перехід по всіх сторінках проєкту', () => {
      // Відкриваємо головну сторінку
      cy.visit('http://demo-store.seleniumacademy.com');
  
      // Отримуємо всі посилання та проходимо по них
      cy.get('a').each((link) => {
        const url = link.prop('href');
  
        if (url) {
          // Відкриваємо кожну сторінку у новому відвідуванні
          cy.visit(url);
        }
      });
    });
  
    it('Реєстрація нового користувача', () => {
      // Відкриваємо сторінку реєстрації
      cy.visit('http://demo-store.seleniumacademy.com/customer/account/create/');
  
      // Заповнюємо поля реєстрації
      cy.get('#firstname').type('Serhii');
      cy.get('#lastname').type('Knysh');
      cy.get('#email_address').type(`test${Date.now()}@example.com`); // Унікальний email
      cy.get('#password').type('TestPassword123');
      cy.get('#confirmation').type('TestPassword123');
  
      // Натискаємо на кнопку реєстрації
      cy.get('button[title="Register"]').click();

      //cy.get('.success-msg').should('contain', 'Thank you for registering'); // Now the site show: "Fatal error: Call to undefined function mb_convert_encoding()"
    });
  
    it('Тестування довільного функціоналу: додавання товару в кошик', () => {
        // Відкриваємо головну сторінку
        cy.visit('http://demo-store.seleniumacademy.com');
      
        // Наводимо курсор на меню "Men" за допомогою команди trigger
        cy.get('.level0.nav-2').contains('Men').trigger('mouseover');
      
        // Чекаємо на появу підменю
        cy.get('ul.level0').should('be.visible');
      
        // Натискаємо на одну з опцій підменю, наприклад "Shirts"
        cy.get('ul.level0 a').contains('Shirts').click();
      
        // Перевіряємо, що ми перейшли на потрібну сторінку
        cy.url().should('include', '/men/shirts');
      
        // Додаємо перший товар у кошик
        cy.get('.item').first().find('a.product-image').click();
      
        // Переконуємося, що колір та розмір доступні для вибору
        cy.get('#configurable_swatch_color .option-khaki').should('exist').and('be.visible').click();
        cy.get('#configurable_swatch_size .option-l').should('exist').and('be.visible').contains('L').click();
      
        // Встановлюємо кількість
        cy.get('#qty').clear().type('5');
      
        // Додаємо товар до кошика
        cy.get('.product-options-bottom button[title="Add to Cart"]').click();
      
        // Перевіряємо, що товар додано в кошик
        cy.get('.success-msg').should('contain', 'was added to your shopping cart');
      });      
      
  });
  