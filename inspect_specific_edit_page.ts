import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://ems-jbm-dev.jandbmedical.com/jandb-admin/login');
    await page.getByPlaceholder('Enter Your Username').fill('deven');
    await page.getByPlaceholder('Enter Your Password').fill('Infotech@1');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForURL(/\/accounts\/accounts$/);
    await page.goto('https://ems-jbm-dev.jandbmedical.com/jandb-admin/accounts/accounts/edit-account/15198');
    await page.waitForLoadState('networkidle');

    const selectors = [
        'div[contenteditable="true"]',
        'p[contenteditable="true"]',
        '[role="textbox"]',
        'div[contenteditable="true"], p[contenteditable="true"], [role="textbox"]',
        'div[contenteditable="true"] p',
        'p',
        'div',
        'textarea',
        'input'
    ];

    for (const sel of selectors) {
        const count = await page.locator(sel).count();
        console.log('SELECTOR', sel, 'COUNT', count);
        if (count) {
            const texts = await page.locator(sel).evaluateAll((els) => els.map((el) => ({
                tag: el.tagName,
                text: (el.textContent || '').trim().slice(0, 80),
                className: el.getAttribute('class'),
                role: el.getAttribute('role'),
                placeholder: el.getAttribute('placeholder'),
                contentEditable: el.getAttribute('contenteditable'),
                ariaLabel: el.getAttribute('aria-label')
            })));
            console.log(JSON.stringify(texts.slice(0, 20), null, 2));
        }
    }

    await browser.close();
})();
