import { test, expect } from '@playwright/test';

const base_url = 'https://www.unitconverters.net/length/feet-to-meters.htm';

test.describe('Unit Conversion Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(base_url);
  });

  // Test case 1: Convert a valid number from feet to meters
  test('Convert a valid number from feet to meters', async ({ page }) => {
    await page.getByLabel('From:').fill('10');
    await page.getByRole('button', { name: 'Convert' }).click();
    await expect(page.getByLabel('To:')).toHaveValue('3.048');
  });

  // Test case 2: Convert zero feet to meters (with spaces)
  test('Convert zero feet to meters (with spaces)', async ({ page }) => {
    await page.getByLabel('From:').fill('    0');
    await page.getByRole('button', { name: 'Convert' }).click();
    await expect(page.getByLabel('To:')).toHaveValue('0');
  });

  // Test case 3: Convert a float number from feet to meters (separated by a dot)
  test('Convert a decimal number from feet to meters separated by a dot', async ({ page }) => {
    await page.getByLabel('From:').fill('-10.5');
    await page.getByRole('button', { name: 'Convert' }).click();
    await expect(page.getByLabel('To:')).toHaveValue('-3.2004');
  });

  // Test case 4: Convert a very large number from feet to meters
  test('Convert a very large number from feet to meters', async ({ page }) => {
    await page.getByLabel('From:').fill('1000000');
    await page.getByRole('button', { name: 'Convert' }).click();
    await expect(page.getByLabel('To:')).toHaveValue('304800');
  });

  // Test case 5: Convert a valid number from meters to feet
  test('Convert a valid number from meters to feet', async ({ page }) => {
    await page.getByRole('link', { name: 'switch' }).click();
    await page.getByLabel('From:').fill('10');
    await page.getByRole('button', { name: 'Convert' }).click();
    await expect(page.getByLabel('To:')).toHaveValue('32.80839895');
    await page.getByRole('button', { name: 'Clear' }).click();
    await expect(page.getByLabel('From:')).toHaveValue('');
    await expect(page.getByLabel('To:')).toHaveValue('');
  });
  
  // Test case 6: Attempt conversion with an invalid input
  test('Attempt conversion with an invalid input', async ({ page }) => {
    await page.getByLabel('From:').fill('sdf');
    await page.getByRole('button', { name: 'Convert' }).click();
    await expect(page.getByLabel('To:')).toBeEmpty();
    await expect(page.locator('#ucresult')).toContainText('Please provide a valid number!');
  });

  // Test case 7: Convert the maximum value from feet to meters
  test('Convert the maximum value from feet to meters', async ({ page }) => {
    await page.getByLabel('From:').fill(Number.MAX_SAFE_INTEGER.toString());
    await page.getByRole('button', { name: 'Convert' }).click();
    const result = await page.getByLabel('To:').inputValue();
    expect(result).not.toBe(''); // Проверка, что результат не пуст
  });

  // Test case 8: Convert the minimum value from feet to meters
  test('Convert the minimum value from feet to meters', async ({ page }) => {
    await page.getByLabel('From:').fill(Number.MIN_SAFE_INTEGER.toString());
    await page.getByRole('button', { name: 'Convert' }).click();
    const result = await page.getByLabel('To:').inputValue();
    expect(result).not.toBe(''); // Проверка, что результат не пуст
  });

  // Test case 9: Convert an empty input from feet to meters
  test('Convert an empty input from feet to meters', async ({ page }) => {
    await page.getByLabel('From:').fill('');
    await page.getByRole('button', { name: 'Convert' }).click();
    await expect(page.getByLabel('To:')).toBeEmpty();
  });

  // Test case 10: Switch units and convert from meters to feet
  test('Switch units and convert from meters to feet', async ({ page }) => {
    await page.getByRole('link', { name: 'switch' }).click();
    await page.getByLabel('From:').fill('10');
    await page.getByRole('button', { name: 'Convert' }).click();
    await expect(page.getByLabel('To:')).toHaveValue('32.80839895');
  });

  // Test case 11: Convert a float number with two dot
  test('Convert a decimal number  with two dot', async ({ page }) => {
    await page.getByLabel('From:').fill('10.5.3');
    await page.getByRole('button', { name: 'Convert' }).click();
    await expect(page.getByLabel('To:')).toBeEmpty();
    await expect(page.locator('#ucresult')).toContainText('Please provide a valid number!');
  });

  // Test case 12: Convert a float number from feet to meters (comma separated)
  test('Convert a decimal number from feet to meters comma separated', async ({ page }) => {
    await page.getByLabel('From:').click();
    await page.getByLabel('From:').fill('10,5');
    await page.getByRole('button', { name: 'Convert' }).click();
    await expect(page.getByLabel('To:')).toHaveValue('3.2004');
  });

  // Test case 13: Convert a float number with two commas
  test('Convert a decimal number with two commas', async ({ page }) => {
    await page.getByLabel('From:').click();
    await page.getByLabel('From:').fill('10,5,3');
    await page.getByRole('button', { name: 'Convert' }).click();
    await expect(page.getByLabel('To:')).toBeEmpty();
    await expect(page.locator('#ucresult')).toContainText('Please provide a valid number!');
  });  
});
