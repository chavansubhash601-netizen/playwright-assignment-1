import { test,expect } from '@playwright/test';


test('eventhub loin page displays required elements' , async ({ page}) => {

  await page.goto('/login');
  await expect(page.getByRole('heading',{name: 'Sign in to EventHub'})).toBeVisible();

  await expect (page.getByPlaceholder('you@email.com')).toBeVisible();

  await expect (page.getByRole('button', {name: 'Sign In'})).toBeVisible();
});

test('Eventhub login page smoke check', async ({ page }) => {

  page.goto('/login');

  await expect (page).toHaveURL(/\/login/);

  await expect(page.getByRole('heading' , {name: 'Sign in to EventHub'}));

  await expect (page.getByLabel('Password')).toBeVisible();

});