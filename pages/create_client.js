export class CreateClient {
  constructor(page) {
    this.page = page;
  }

  async run() {
    const page = this.page;

    // ✅ Wait for dashboard
    const startProcessBtn = page.getByRole('link', { name: /Start Process/i });
    await startProcessBtn.waitFor();
    await startProcessBtn.click();

    // 🧾 Client Info
    await page.getByPlaceholder('Enter 6-digit Client ID').fill('777777');
    await page.getByRole('textbox', { name: /Client Name/i }).fill('testing');
    await page.getByRole('textbox', { name: /Client Alias/i }).fill('qwerty');
    await page.getByPlaceholder('contact@company.com').fill('test@gmail.com');

    // 📌 Account Type — native <select>
    await page.locator('#Form_AccountType').selectOption({ label: 'Normal' });

    // 📌 Customer Type — native <select>
    await page.locator('select[name="Form.CustomerType"]').selectOption({ label: 'Individual' });

    // 🪪 Identification
    await page.getByPlaceholder('42501-1234567-1').fill('12345-6789789-1');
    await page.getByRole('textbox', { name: /GST Number/i }).fill('1234567891234');

    // 📅 Dates
    await page.getByRole('textbox', { name: /Agreement Start/i }).fill('2026-04-01');
    await page.getByRole('textbox', { name: /Agreement End/i }).fill('2026-04-24');

    // 🏭 High Level Industry
    const highLevelLocator = page.locator('select[name*="HighLevel"], select[id*="HighLevel"], select[id*="Industry"]').first();
    await highLevelLocator.scrollIntoViewIfNeeded();
    await highLevelLocator.selectOption({ label: 'Agriculture' });

    // 📍 Area
    const areaLocator = page.locator('select[name*="Area"], select[id*="Area"]').first();
    await areaLocator.scrollIntoViewIfNeeded();
    await areaLocator.selectOption({ label: 'Abyssinia Lines' });

    // 🏠 Address
    await page.locator('#Form_RegisteredAddress').fill('test address');

    // ✅ Submit
    await page.getByRole('button', { name: /Create client/i }).click();


  }
}