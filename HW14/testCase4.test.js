const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

(async function testTableSorting() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://the-internet.herokuapp.com/tables');

    const table = await driver.findElement(By.id('table2'));
    await driver.executeScript("arguments[0].scrollIntoView(true);", table);

    const dueHeader = await table.findElement(By.xpath(".//span[text()='Due']"));
    await dueHeader.click();

    await driver.sleep(1000); // a short wait to make sure the sorting is applied

    const dueCells = await table.findElements(By.xpath(".//tbody/tr/td[4]"));

    const dueValues = [];
    for (let cell of dueCells) {
      const text = await cell.getText();
      const value = parseFloat(text.replace('$', '')); // remove $ sign and parse as float
      dueValues.push(value);
    }

    const isSorted = dueValues.every((val, i, arr) => !i || arr[i - 1] <= val);
    assert.strictEqual(isSorted, true, 'The "Due" column values should be sorted in ascending order.');

    console.log("Test passed: The 'Due' column values are sorted in ascending order.");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await driver.quit();
  }
})();
