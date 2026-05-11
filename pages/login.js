export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByRole('textbox', { name: /Email Address/i });
    this.password = page.getByRole('textbox', { name: /Password/i });
    this.loginBtn  = page.getByRole('button',  { name: /Sign In/i });
  }

  async goto() {
    await this.page.goto('http://172.16.0.13/kyc/Account/Login');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}