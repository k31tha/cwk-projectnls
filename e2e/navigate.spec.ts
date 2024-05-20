import {test, expect} from '@playwright/test';
const baseURL = 'http://localhost:' + '3000';

test('root page of app', async ({page}) => {
  await page.goto(baseURL + '/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CWK - Project NLS/);
  await expect(page.locator('#detail').getByText('home')).toBeVisible();
});

test('club search page of app', async ({page}) => {
  await page.goto(baseURL + '/club');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByText('club search')).toBeVisible();
});

test('about page of app', async ({page}) => {
  await page.goto(baseURL + '/about');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByText('about page')).toBeVisible();
});

test('pyramid page of app', async ({page}) => {
  await page.goto(baseURL + '/pyramid');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByText('pyramid page')).toBeVisible();
});

test('club page of app for club woking', async ({page}) => {
  await page.goto(baseURL + '/club/woking');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByRole('heading', {name: 'Woking'})).toBeVisible();
});

test('club page of app for club knaphill', async ({page}) => {
  await page.goto(baseURL + '/club/knaphill-fc');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByRole('heading', {name: 'knaphill fc'})).toBeVisible();
});

test('navigate down to a club from route page', async ({page}) => {
  await page.goto(baseURL + '/');
  await expect(page).toHaveTitle(/CWK - Project NLS/);
  await expect(page.locator('#detail').getByText('home')).toBeVisible();
  await page.click('text=club');
  await expect(page.getByText('club search')).toBeVisible();
  await expect(page.getByText('no of clubs is')).toBeVisible();
  const clubCount = await page
    .locator('[data-test-id="club-search-count"]')
    .textContent();
  expect(parseInt(clubCount ?? '0', 10)).toBeGreaterThan(0);
  //await page.click('text=club/woking-fc');
  //await page.getByRole('link', {name: 'woking'}).click();
  //await expect(page.getByRole('heading', {name: 'Woking'})).toBeVisible();
});

//test('get started link', async ({page}) => {
//await page.goto('https://playwright.dev/');

// Click the get started link.
//await page.getByRole('link', {name: 'Get started'}).click();

// Expects page to have a heading with the name of Installation.
//await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
//});
