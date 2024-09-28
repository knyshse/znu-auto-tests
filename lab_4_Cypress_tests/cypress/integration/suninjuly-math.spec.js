describe('Автоматизація дій на сторінці http://suninjuly.github.io/math.html', () => {
  it('Автоматизація дій на сторінці http://suninjuly.github.io/math.html', () => {
    // Відкриваємо сторінку
    cy.visit('http://suninjuly.github.io/math.html');

    // Зчитуємо значення змінної x
    cy.get('#input_value').invoke('text').then((x) => {
      // Обчислюємо значення математичної функції
      const result = Math.log(Math.abs(12 * Math.sin(Number(x))));

      // Вводимо результат у текстове поле
      cy.get('#answer').type(result.toString());
    });

    // Вибираємо checkbox "I'm the robot"
    cy.get('#robotCheckbox').check();

    // Вибираємо radiobutton "Robots rule!"
    cy.get('#robotsRule').check();

    // Натискаємо кнопку Submit
    cy.get('button[type="submit"]').click();
  });
});