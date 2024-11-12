const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

(async function testDropdownState() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://the-internet.herokuapp.com/dropdown');

    const dropdown = await driver.findElement(By.id('dropdown'));

    const options = await dropdown.findElements(By.tagName('option'));

    const isFirstOptionEnabled = await options[0].isEnabled();
    assert.strictEqual(isFirstOptionEnabled, false, 'The first option should be inactive.');

    const isSecondOptionEnabled = await options[1].isEnabled();
    assert.strictEqual(isSecondOptionEnabled, true, 'The second option should be active.');

    console.log("Test passed: First option is inactive, and second option is active.");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await driver.quit();
  }
})();
