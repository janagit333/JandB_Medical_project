import { expect, Locator, Page } from "@playwright/test";

export class logginHomepage {
    readonly page: Page;

    readonly username: Locator;
    readonly password: Locator;
    readonly signinBtn: Locator;
    readonly welcomeText: Locator;
    readonly accountsLink: Locator;
    readonly editOption: Locator;
    readonly saveBtn: Locator;
    readonly successMessage: Locator;
    readonly accountRows: Locator;
    readonly descriptionField: Locator;
    readonly editheaders: Locator;
    readonly namefeild: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.getByPlaceholder('Enter Your Username');
        this.password = page.getByPlaceholder('Enter Your Password');
        this.signinBtn = page.getByRole('button', { name: 'Sign In' });
        this.welcomeText = page.getByText('Welcome, Deven SuperAdmin');
        this.accountsLink = page.getByRole('link', { name: /^Accounts$/i }).nth(0);
        this.editOption = page.getByRole('button', { name: /^Edit$/i });
        this.saveBtn = page.getByRole('button', { name: /save/i });
        this.successMessage = page
            .getByText(/updated successfully|successfully updated|account updated/i)
            .first();
        this.accountRows = page.locator('table tbody tr');
        this.descriptionField = page.locator('div[contenteditable="true"]').first();

        this.editheaders = page.getByText(/^Edit - /i).first();
        this.namefeild = page.locator('#name');
    }

    async navigateToLoginPage(url: string) {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
        await this.page.waitForLoadState('networkidle');
    }

    async loginIntoApplication(username: string, password: string) {
        await expect(this.username).toBeVisible({ timeout: 30000 });
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signinBtn.click();
    }

    async verifyAdminName() {
        await expect(this.welcomeText).toContainText('Welcome, Deven SuperAdmin', { timeout: 30000 });
    }

    async clickAccountsFromSidebar() {
        await expect(this.accountsLink).toBeVisible({ timeout: 30000 });
        await this.accountsLink.click();
        await expect(this.page.getByRole('heading', { name: /^Manage Accounts$/i }))
            .toBeVisible({ timeout: 30000 });
    }

    async selectAccountRecord(accountName: string) {
        const row = this.accountRows.filter({ hasText: accountName }).first();
        await expect(row).toBeVisible({ timeout: 30000 });
        await row.locator('img[src*="action_button.svg"]').first().click();

        const editOption = this.editOption.first();
        await expect(editOption).toBeVisible({ timeout: 30000 });
        await editOption.click();
        await expect(this.page.getByText('Basic Information')).toBeVisible({ timeout: 30000 });
    }

    private async setEditorText(value: string) {
        await this.descriptionField.evaluate((element, v) => {
            element.textContent = v;
            element.dispatchEvent(new InputEvent('input', { bubbles: true }));
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }, value);
    }

    async updateDescriptionText(_oldText: string, newText: string) {
        await expect(this.descriptionField).toBeVisible({ timeout: 30000 });
        await this.descriptionField.click();

        const currentText = ((await this.descriptionField.textContent()) ?? '').trim();

        if (currentText === newText) {
            // force a real change so the form becomes "dirty"
            await this.setEditorText(`${newText} `);
        }
        await this.setEditorText(newText);

        await expect(this.descriptionField).toHaveText(newText);
    }

    async clickSaveButton() {
        await expect(this.saveBtn).toBeVisible({ timeout: 30000 });
        await expect(this.saveBtn).toBeEnabled({ timeout: 30000 });
        await this.saveBtn.click();
    }

    async verifySuccessMessage() {
        await expect(this.successMessage).toBeVisible({ timeout: 30000 });
    }

    async verifyEditHeader(expectedAccountName?: string) {
        await expect(this.editheaders).toBeVisible({ timeout: 30000 });
        if (expectedAccountName) {
            await expect(this.editheaders).toContainText(`Edit - ${expectedAccountName}`, { timeout: 30000 });
        }
    }

    /** Compares the header text (without "Edit - ") with the Name field value */
    async compareText() {
        await expect(this.editheaders).toBeVisible({ timeout: 30000 });
        await expect(this.namefeild).toBeVisible({ timeout: 30000 });

        const headerText = ((await this.editheaders.textContent()) ?? '').trim();
        const accountNameFromHeader = headerText.replace(/^Edit\s*-\s*/, '').trim();
        const nameValue = (await this.namefeild.inputValue()).trim();

        expect(nameValue, 'Name field should match the header').toBe(accountNameFromHeader);
    }

    async verifyNameField(expectedName?: string) {
        await expect(this.namefeild).toBeVisible({ timeout: 30000 });
        if (expectedName) {
            await expect(this.namefeild).toHaveValue(expectedName, { timeout: 30000 });
        }
        await expect(this.namefeild).toBeDisabled();
    }

    async logout() {
        const profileIcon = this.page.locator('img[alt="Profile Picture"]').first();
        await expect(profileIcon).toBeVisible({ timeout: 30000 });
        await profileIcon.click();

        const logoutItem = this.page.getByText(/logout|log out|sign out/i).last();
        await expect(logoutItem).toBeVisible({ timeout: 30000 });
        await logoutItem.click();
    }
}