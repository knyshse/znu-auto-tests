import { expect, $ } from '@wdio/globals';

describe('Тест для API-Demos', () => {
    beforeEach(async () => {
        // Запускаємо додаток (appId знайшов у Appium Inspector)
        await driver.activateApp('io.appium.android.apis');
    });

    afterEach(async () => {
        // Закриваємо додаток
        await driver.terminateApp('io.appium.android.apis');
    });

    it('Перевірка введення назви країни', async () => {
        // Навігація до текстового поля через різні стратегії пошуку

        // Пошук за accessibility id
        const viewsOption = await $('~Views');
        await viewsOption.click();

        // Пошук за допомогую Android UI Automator Selector
        const autoCompleteOption = await $('android=new UiSelector().text("Auto Complete")');
        await autoCompleteOption.click();

        // Пошук за XPath
        const screenTopOption = await $('//android.widget.TextView[@content-desc="1. Screen Top"]');
        await screenTopOption.click();

        // Знаходимо текстове поле та вводимо назву країни
        const textField = await $('android.widget.AutoCompleteTextView');
        await textField.setValue('Ukraine');

        // Перевіряємо введений текст
        const value = await textField.getText();
        await expect(value).toBe('Ukraine');
    });

    it('Тестування додаткових пунктів меню', async () => {
        // Протестуємо ще 2 пункти головного меню за власним вибором

        const accessibilityOption = await $('~Accessibility');
        await accessibilityOption.click();
        const accessibilityServiceOption = await $('~Accessibility Service');
        await accessibilityServiceOption.click();

        // Пошук елемента за частиною тексту з використанням XPath
        const textElement = await $('//android.widget.TextView[contains(@text, "Enable ClockBack (Settings -> Accessibility -> ClockBack)")]');
        // Отримуємо текст елемента
        const elementText = await textElement.getText();
        // Перевіряємо, що текст містить потрібний підрядок
        await expect(elementText).toContain("Enable ClockBack (Settings -> Accessibility -> ClockBack)");

        // Повертаємося назад
        await driver.back();
        await driver.back();

        const appOption = await $('~App');
        await appOption.click();

        const alertDialogsOption = await $('~Alert Dialogs');
        await alertDialogsOption.click();

        // Додаємо асерти для підтвердження переходу
        const dialogText = await $('android.widget.TextView').getText();
        expect(dialogText).toContain('App/Alert Dialogs');
    });
});