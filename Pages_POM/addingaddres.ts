import { expect, Locator, Page } from '@playwright/test';

export interface AddressDetails {
    firstName: string;
    lastName: string;
    country: string;
    addressLine1: string;
    addressLine2: string;
    state: string;
    city: string;
    postalCode: string;
}

export class AddingAddressPage {
    readonly page: Page;
    readonly addressTab: Locator;
    readonly accountAddressesHeading: Locator;
    readonly addAddressButton: Locator;
    readonly addressForm: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly countryField: Locator;
    readonly addressLine1Field: Locator;
    readonly addressLine2Field: Locator;
    readonly stateField: Locator;
    readonly cityField: Locator;
    readonly postalCodeField: Locator;
    readonly saveAddressButton: Locator;
    readonly addressAddedMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addressTab = page.getByRole('tab', { name: /Addresses/i });
        this.accountAddressesHeading = page.getByRole('heading', { name: 'Account Addresses' });
        this.addAddressButton = page.getByRole('button', { name: /Add Address/i });
        this.addressForm = page.getByRole('complementary').filter({ hasText: 'Create New Address' });
        this.firstNameField = this.addressForm.getByPlaceholder('Enter First Name');
        this.lastNameField = this.addressForm.getByPlaceholder('Enter Last Name');
        this.countryField = this.addressForm.getByPlaceholder('Enter Country');
        this.addressLine1Field = this.addressForm.getByPlaceholder('Enter Address').nth(0);
        this.addressLine2Field = this.addressForm.getByPlaceholder('Enter Address').nth(1);
        this.stateField = this.addressForm.getByPlaceholder('Enter State');
        this.cityField = this.addressForm.getByPlaceholder('Enter City');
        this.postalCodeField = this.addressForm.getByPlaceholder('Enter Postal Code');
        this.saveAddressButton = this.addressForm.getByRole('button', { name: 'Save', exact: true });
        this.addressAddedMessage = page.getByText('Address added successfully.', { exact: true });
    }

    async clickAddressTab() {
        await this.addressTab.click();
        await expect(this.accountAddressesHeading).toBeVisible();
    }

    async clickAddAddressButton() {
        await this.addAddressButton.click();
        await expect(this.addressForm).toBeVisible();
    }

    async fillAddressDetails(details: AddressDetails) {
        await expect(this.firstNameField).toBeVisible();
        await this.firstNameField.fill(details.firstName);
        await this.lastNameField.fill(details.lastName);
        await this.countryField.fill(details.country);
        await this.addressLine1Field.fill(details.addressLine1);
        await this.addressLine2Field.fill(details.addressLine2);
        await this.stateField.fill(details.state);
        await this.cityField.fill(details.city);
        await this.postalCodeField.fill(details.postalCode);
    }

    async saveAddress() {
        await expect(this.saveAddressButton).toBeEnabled();
        await this.saveAddressButton.click();
        await expect(this.addressAddedMessage).toBeVisible();
    }

    async verifyAddressAdded(addressLine2: string) {
        const savedAddressLine = this.page
            .getByRole('tabpanel', { name: /Addresses/i })
            .getByText(new RegExp(`^${addressLine2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i'))
            .last();
        await expect(savedAddressLine).toBeVisible();
    }
}
