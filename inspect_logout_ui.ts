const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://ems-jbm-dev.jandbmedical.com/jandb-admin/login');
    await page.getByPlaceholder('Enter Your Username').fill('deven');
    await page.getByPlaceholder('Enter Your Password').fill('Infotech@1');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForURL(/\/accounts\/accounts(?:$|\?)/);
    await page.getByRole('link', { name: /^Accounts$/i }).nth(0).click();
    await page.waitForURL(/\/accounts\/accounts(?:$|\?)/);

    const row = page.locator('table tbody tr').filter({ hasText: 'Advanced Functional Medicine of Michigan' }).first();
    await row.locator('img[src*="action_button.svg"]').click();
    await page.getByRole('button', { name: /^Edit$/i }).click();
    await page.waitForURL(/\/accounts\/accounts\/edit-account\/\d+$/);

    const editor = page.locator('div[contenteditable="true"], p[contenteditable="true"], [role="textbox"]').first();
    await editor.click();
    await editor.evaluate((element) => {
        element.textContent = 'Testing in progress';
        element.dispatchEvent(new InputEvent('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.getByRole('button', { name: /save/i }).click();
    await page.waitForTimeout(3000);

    const textNodes = await page.locator('button, a, span, div, li').evaluateAll((els) =>
        els.map((el) => ({
            tag: el.tagName,
            text: (el.textContent || '').trim(),
            role: el.getAttribute('role'),
            aria: el.getAttribute('aria-label'),
            className: el.getAttribute('class'),
            alt: el.getAttribute('alt')
        })).filter((x) => x.text.length > 0)
    );

    console.log(JSON.stringify(textNodes.filter((x) => /logout|log out|sign out|DE|deven|Welcome|Profile/i.test(x.text) || /logout|log out|sign out|profile/i.test(x.aria || '') || /profile/i.test(x.className || '') || /profile/i.test(x.alt || '')).slice(0, 200), null, 2));
    await browser.close();
})();
