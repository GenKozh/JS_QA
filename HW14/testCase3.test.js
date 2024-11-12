const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

(async function testFormFilling() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://formy-project.herokuapp.com/form');

    const firstNameField = await driver.findElement(By.id('first-name'));
    await firstNameField.sendKeys('Peter');

    const lastNameField = await driver.findElement(By.id('last-name'));
    await lastNameField.sendKeys('Peterson');

    const jobTitleField = await driver.findElement(By.id('job-title'));
    await jobTitleField.sendKeys('tester');

    const highSchoolRadioButton = await driver.findElement(By.css('input[value="radio-button-1"]'));
    await highSchoolRadioButton.click();

    const maleCheckbox = await driver.findElement(By.css('input[value="checkbox-1"]'));
    await maleCheckbox.click();

    const experienceDropdown = await driver.findElement(By.id('select-menu'));
    await experienceDropdown.findElement(By.css('option[value="2"]')).click();

    const dateField = await driver.findElement(By.id('datepicker'));
    await dateField.sendKeys('12/12/2020');

    const submitButton = await driver.findElement(By.css('.btn.btn-lg.btn-primary'));
    await submitButton.click();

    const confirmationMessage = await driver.wait(
      until.elementLocated(By.css('.alert.alert-success')),
      5000
    );
    const messageText = await confirmationMessage.getText();
    assert.strictEqual(messageText, 'The form was successfully submitted!');

    console.log("Test passed: Form was successfully submitted.");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await driver.quit();
  }
})();
