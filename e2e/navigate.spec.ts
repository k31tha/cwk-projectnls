import {test, expect} from '@playwright/test';

test('root page of app', async ({page}) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CWK - Project NLS/);
  await expect(page.locator('#detail').getByText('home')).toBeVisible();
});

test('club search page of app', async ({page}) => {
  await page.goto('http://localhost:5173/club');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByText('club search')).toBeVisible();
});

test('about page of app', async ({page}) => {
  await page.goto('http://localhost:5173/about');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByText('about page')).toBeVisible();
});

test('pyramid page of app', async ({page}) => {
  await page.goto('http://localhost:5173/pyramid');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByText('pyramid page')).toBeVisible();
});

test('club page of app for a club', async ({page}) => {
  await page.goto('http://localhost:5173/club/woking');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByText('club with name')).toBeVisible();
});

test('navigate down to a club from route page', async ({page}) => {
  await page.goto('http://localhost:5173/');
  await expect(page).toHaveTitle(/CWK - Project NLS/);
  await expect(page.locator('#detail').getByText('home')).toBeVisible();
  await page.click('text=club');
  await expect(page.getByText('club search')).toBeVisible();
  //await page.click('text=club/woking-fc');
  await page.getByRole('link', {name: 'woking fc'}).click();
  await expect(page.getByText('club with name')).toBeVisible();
});

//test('get started link', async ({page}) => {
//await page.goto('https://playwright.dev/');

// Click the get started link.
//await page.getByRole('link', {name: 'Get started'}).click();

// Expects page to have a heading with the name of Installation.
//await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
//});
