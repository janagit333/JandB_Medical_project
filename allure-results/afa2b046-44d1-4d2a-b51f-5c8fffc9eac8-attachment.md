# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Addingaddress.spec.ts >> add a contact address to an account
- Location: tests\Addingaddress.spec.ts:4:5

# Error details

```
Error: page.goto: net::ERR_EMPTY_RESPONSE at https://ems-jbm-dev.jandbmedical.com/jandb-admin/accounts/accounts/edit-account/15198
Call log:
  - navigating to "https://ems-jbm-dev.jandbmedical.com/jandb-admin/accounts/accounts/edit-account/15198", waiting until "domcontentloaded"

```

# Test source

```ts
  1   | import { expect, Locator, Page } from "@playwright/test";
  2   | 
  3   | export class logginHomepage {
  4   |     readonly page: Page;
  5   | 
  6   |     readonly username: Locator;
  7   |     readonly password: Locator;
  8   |     readonly signinBtn: Locator;
  9   |     readonly welcomeText: Locator;
  10  |     readonly accountsLink: Locator;
  11  |     readonly editOption: Locator;
  12  |     readonly saveBtn: Locator;
  13  |     readonly successMessage: Locator;
  14  |     readonly accountRows: Locator;
  15  |     readonly descriptionField: Locator;
  16  |     readonly editheaders: Locator;
  17  |     readonly namefeild: Locator;
  18  | 
  19  |     constructor(page: Page) {
  20  |         this.page = page;
  21  | 
  22  |         this.username = page.getByPlaceholder('Enter Your Username');
  23  |         this.password = page.getByPlaceholder('Enter Your Password');
  24  |         this.signinBtn = page.getByRole('button', { name: 'Sign In' });
  25  |         this.welcomeText = page.getByText('Welcome, Deven SuperAdmin');
  26  |         this.accountsLink = page.getByRole('link', { name: /^Accounts$/i }).nth(0);
  27  |         this.editOption = page.getByRole('button', { name: /^Edit$/i });
  28  |         this.saveBtn = page.getByRole('button', { name: /save/i });
  29  |         this.successMessage = page
  30  |             .getByText(/updated successfully|successfully updated|account updated/i)
  31  |             .first();
  32  |         this.accountRows = page.locator('table tbody tr');
  33  |         this.descriptionField = page.locator('div[contenteditable="true"]').first();
  34  | 
  35  |         this.editheaders = page.getByText(/^Edit - /i).first();
  36  |         this.namefeild = page.locator('#name');
  37  |     }
  38  | 
  39  |     async navigateToLoginPage() {
> 40  |         await this.page.goto(
      |                         ^ Error: page.goto: net::ERR_EMPTY_RESPONSE at https://ems-jbm-dev.jandbmedical.com/jandb-admin/accounts/accounts/edit-account/15198
  41  |             'https://ems-jbm-dev.jandbmedical.com/jandb-admin/accounts/accounts/edit-account/15198',
  42  |             { waitUntil: 'domcontentloaded' }
  43  |         );
  44  |         await this.page.waitForLoadState('networkidle');
  45  |     }
  46  | 
  47  |     async loginIntoApplication(username: string, password: string) {
  48  |         await expect(this.username).toBeVisible({ timeout: 30000 });
  49  |         await this.username.fill(username);
  50  |         await this.password.fill(password);
  51  |         await this.signinBtn.click();
  52  |     }
  53  | 
  54  |     async verifyAdminName() {
  55  |         await expect(this.welcomeText).toContainText('Welcome, Deven SuperAdmin', { timeout: 30000 });
  56  |     }
  57  | 
  58  |     async clickAccountsFromSidebar() {
  59  |         await expect(this.accountsLink).toBeVisible({ timeout: 30000 });
  60  |         await this.accountsLink.click();
  61  |         await expect(this.page.getByRole('heading', { name: /^Manage Accounts$/i }))
  62  |             .toBeVisible({ timeout: 30000 });
  63  |     }
  64  | 
  65  |     async selectAccountRecord(accountName: string) {
  66  |         const row = this.accountRows.filter({ hasText: accountName }).first();
  67  |         await expect(row).toBeVisible({ timeout: 30000 });
  68  |         await row.locator('img[src*="action_button.svg"]').first().click();
  69  | 
  70  |         const editOption = this.editOption.first();
  71  |         await expect(editOption).toBeVisible({ timeout: 30000 });
  72  |         await editOption.click();
  73  |         await expect(this.page.getByText('Basic Information')).toBeVisible({ timeout: 30000 });
  74  |     }
  75  | 
  76  |     private async setEditorText(value: string) {
  77  |         await this.descriptionField.evaluate((element, v) => {
  78  |             element.textContent = v;
  79  |             element.dispatchEvent(new InputEvent('input', { bubbles: true }));
  80  |             element.dispatchEvent(new Event('change', { bubbles: true }));
  81  |         }, value);
  82  |     }
  83  | 
  84  |     async updateDescriptionText(_oldText: string, newText: string) {
  85  |         await expect(this.descriptionField).toBeVisible({ timeout: 30000 });
  86  |         await this.descriptionField.click();
  87  | 
  88  |         const currentText = ((await this.descriptionField.textContent()) ?? '').trim();
  89  | 
  90  |         if (currentText === newText) {
  91  |             // force a real change so the form becomes "dirty"
  92  |             await this.setEditorText(`${newText} `);
  93  |         }
  94  |         await this.setEditorText(newText);
  95  | 
  96  |         await expect(this.descriptionField).toHaveText(newText);
  97  |     }
  98  | 
  99  |     async clickSaveButton() {
  100 |         await expect(this.saveBtn).toBeVisible({ timeout: 30000 });
  101 |         await expect(this.saveBtn).toBeEnabled({ timeout: 30000 });
  102 |         await this.saveBtn.click();
  103 |     }
  104 | 
  105 |     async verifySuccessMessage() {
  106 |         await expect(this.successMessage).toBeVisible({ timeout: 30000 });
  107 |     }
  108 | 
  109 |     async verifyEditHeader(expectedAccountName?: string) {
  110 |         await expect(this.editheaders).toBeVisible({ timeout: 30000 });
  111 |         if (expectedAccountName) {
  112 |             await expect(this.editheaders).toContainText(`Edit - ${expectedAccountName}`, { timeout: 30000 });
  113 |         }
  114 |     }
  115 | 
  116 |     /** Compares the header text (without "Edit - ") with the Name field value */
  117 |     async compareText() {
  118 |         await expect(this.editheaders).toBeVisible({ timeout: 30000 });
  119 |         await expect(this.namefeild).toBeVisible({ timeout: 30000 });
  120 | 
  121 |         const headerText = ((await this.editheaders.textContent()) ?? '').trim();
  122 |         const accountNameFromHeader = headerText.replace(/^Edit\s*-\s*/, '').trim();
  123 |         const nameValue = (await this.namefeild.inputValue()).trim();
  124 | 
  125 |         expect(nameValue, 'Name field should match the header').toBe(accountNameFromHeader);
  126 |     }
  127 | 
  128 |     async verifyNameField(expectedName?: string) {
  129 |         await expect(this.namefeild).toBeVisible({ timeout: 30000 });
  130 |         if (expectedName) {
  131 |             await expect(this.namefeild).toHaveValue(expectedName, { timeout: 30000 });
  132 |         }
  133 |         await expect(this.namefeild).toBeDisabled();
  134 |     }
  135 | 
  136 |     async logout() {
  137 |         const profileIcon = this.page.locator('img[alt="Profile Picture"]').first();
  138 |         await expect(profileIcon).toBeVisible({ timeout: 30000 });
  139 |         await profileIcon.click();
  140 | 
```