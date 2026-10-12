const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://ems-jbm-dev.jandbmedical.com/jandb-admin/login');
    await page.getByPlaceholder('Enter Your Username').fill('deven');
    await page.getByPlaceholder('Enter Your Password').fill('Infotech@1');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForURL(/\/accounts\/accounts$/);

    await page.locator('table tbody tr').first().locator('img[src*="action_button.svg"]').click();
    await page.getByRole('button', { name: /^Edit$/i }).click();
    await page.waitForURL(/\/accounts\/accounts\/edit-account\/\d+$/);

    const items = await page.locator('input, textarea, [contenteditable="true"], [role="textbox"], div[contenteditable="true"]').evaluateAll((els) => els.map((el, i) => ({
        i,
        tag: el.tagName,
        role: el.getAttribute('role'),
        name: el.getAttribute('name'),
        placeholder: el.getAttribute('placeholder'),
        ariaLabel: el.getAttribute('aria-label'),
        text: (el.textContent || '').trim().slice(0, 80),
        contentEditable: el.getAttribute('contenteditable'),
        className: el.getAttribute('class')
    })));

    console.log(JSON.stringify(items, null, 2));
    await browser.close();
})();
