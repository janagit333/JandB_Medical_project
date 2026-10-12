import { test, expect } from '@playwright/test';
import { logginHomepage } from '../Pages_POM/Logginpage';

test('login to admin and update account description', async ({ page }) => {
    const homepage = new logginHomepage(page);
    await homepage.navigateToLoginPage();
    await homepage.loginIntoApplication('deven', 'Infotech@1');
    await homepage.verifyAdminName();
    await homepage.clickAccountsFromSidebar();
    await homepage.selectAccountRecord('Advanced Functional Medicine of Michigan');
    await expect(page.getByText('Basic Information')).toBeVisible();
    await homepage.verifyEditHeader();
    await homepage.verifyNameField();
    await homepage.updateDescriptionText('Updated by Playwright automation1', 'Testing in progress1');
    await homepage.clickSaveButton();
    await homepage.verifySuccessMessage();
    await homepage.verifyEditHeader('Advanced Functional Medicine of Michigan');
    await homepage.compareText();
    await homepage.verifyNameField('Advanced Functional Medicine of Michigan');
    await homepage.logout();
});
