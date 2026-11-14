
await page.goto('http://localhost:5173/login');
await page.locator('[data-testid="cs-login-email"]').fill('john@example.com');
await page.locator('[data-testid="cs-login-password"]').fill('password123');
await page.locator('[data-testid="cs-login-submit"]').click();
await expect(page).toHaveURL('/dashboard');
