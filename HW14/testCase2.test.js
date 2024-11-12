const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const { Actions } = require('selenium-webdriver');

(async function testHoveringOverElement() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://the-internet.herokuapp.com/hovers');

    const avatar = await driver.findElement(By.css('.figure:nth-child(3) img'));

    const actions = driver.actions({ async: true });
    await actions.move({ origin: avatar }).perform();

    const userText = await driver.wait(until.elementLocated(By.xpath("//h5[text()='name: user1']")), 5000);

    const isTextDisplayed = await userText.isDisplayed();
    assert.strictEqual(isTextDisplayed, true, 'The text "name: user1" should appear under the avatar picture.');

    console.log("Test passed: Hovering over the avatar displays 'name: user1'.");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await driver.quit();
  }
})();
