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

    await page.locator('table tbody tr').first().locator('img[src*="action_button.svg"]').click();
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

    const texts = await page.locator('button, a, span, div').evaluateAll((els) =>
        els.map((el) => ({
            text: (el.textContent || '').trim(),
            role: el.getAttribute('role'),
            ariaLabel: el.getAttribute('aria-label'),
            className: el.getAttribute('class')
        })).filter((x) => /logout|log out|sign out|profile|DE|Welcome/i.test(x.text || '') || x.role === 'button' || x.ariaLabel)
    );
    console.log(JSON.stringify(texts.slice(0, 200), null, 2));

    const profile = page.locator('img[alt="Profile Picture"], [class*="profile"], button').filter({ hasText: /DE|deven/i }).first();
    if (await profile.count()) {
        console.log('PROFILE EXISTS');
        await profile.click();
        await page.waitForTimeout(2000);
        const after = await page.locator('button, a, span').evaluateAll((els) =>
            els.map((el) => ({ text: (el.textContent || '').trim(), role: el.getAttribute('role'), ariaLabel: el.getAttribute('aria-label') })).filter((x) => /logout|log out|sign out/i.test(x.text || '') || /logout|log out|sign out/i.test(x.ariaLabel || ''))
        );
        console.log('AFTER PROFILE CLICK', JSON.stringify(after.slice(0, 100), null, 2));
    }

    await browser.close();
})();
