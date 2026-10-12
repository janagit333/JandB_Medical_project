import { test } from '@playwright/test';
import { logginHomepage } from '../Pages_POM/Logginpage';
import { AddingAddressPage } from '../Pages_POM/addingaddres';


test('adds an address to an account', async ({ page }) => {
    const homepage = new logginHomepage(page);
    await homepage.navigateToLoginPage();
    await homepage.loginIntoApplication('deven', 'Infotech@1');
    await homepage.verifyAdminName();
    await homepage.clickAccountsFromSidebar();
    await homepage.selectAccountRecord('Advanced Functional Medicine of Michigan');

    const address = new AddingAddressPage(page);
    await address.clickAddressTab();
    await address.clickAddAddressButton();
    await address.fillAddressDetails({
        firstName: 'Peddaiah',
        lastName: 'Ramigalla',
        country: 'India',
        addressLine1: 'Hyderabad',
        addressLine2: 'RTA ofc Kondapur',
        state: 'Telangana',
        city: 'Hyderabad',
        postalCode: '500084',
    });
    await address.saveAddress();
    await address.verifyAddressAdded('RTA ofc Kondapur');

});
