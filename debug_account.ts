const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://ems-jbm-dev.jandbmedical.com/jandb-admin/login');
    await page.getByPlaceholder('Enter Your Username').fill('deven');
    await page.getByPlaceholder('Enter Your Password').fill('Infotech@1');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForURL(/\/accounts\/accounts$/);

    const row = page.locator('table tbody tr').first();
    console.log('ROW TEXT:', await row.textContent());

    const imgs = await row.locator('img').evaluateAll((els) =>
        els.map((el) => ({
            src: el.getAttribute('src'),
            alt: el.getAttribute('alt'),
            className: el.getAttribute('class'),
        }))
    );
    console.log('IMG INFO:', JSON.stringify(imgs, null, 2));

    const html = await row.evaluate((el) => el.innerHTML);
    console.log('ROW HTML:', html);

    await browser.close();
})();
