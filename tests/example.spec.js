import { test } from '@playwright/test';
import { LoginPage }    from '../pages/login';
import { CreateClient } from '../pages/create_client';

test('Create Client - KYC Flow', async ({ page }) => {

  // 🔐 Login
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(
    'Muhammad.Waris@leopardscourier.com',
    'Amina@12'
  );

  // 🚀 Create Client
  const createClient = new CreateClient(page);
  await createClient.run();

});