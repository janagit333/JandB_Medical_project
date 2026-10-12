# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Jandbloginpage.spec.ts >> login to admin and update account description
- Location: tests\Jandbloginpage.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /^Edit$/i }).first()
    - locator resolved to <button pc78="" pbutton="" data-pc-name="e" data-pc-section="root" _ngcontent-ng-c383287201="" class="status-button p-button-text p-button-primary flex align-items-center gap-2 justify-content-start p-button p-component ng-star-inserted">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - generic [ref=e3]:
    - generic [ref=e4]:
      - navigation "Admin navigation" [ref=e6]:
        - img "Logo" [ref=e8]
        - list [ref=e9]:
          - listitem [ref=e10]:
            - generic [ref=e11]:
              - generic [ref=e12] [cursor=pointer]:
                - img "Accounts" [ref=e14]
                - generic [ref=e15]: Accounts
              - generic [ref=e16]: 
            - list [ref=e18]:
              - listitem [ref=e19]: Accounts
              - listitem [ref=e20]: Users
              - listitem [ref=e21]: Roles
          - listitem [ref=e22]:
            - generic [ref=e23]:
              - generic [ref=e24] [cursor=pointer]:
                - img "Inventory" [ref=e26]
                - generic [ref=e27]: Inventory
              - generic [ref=e28]: 
            - list:
              - listitem [ref=e30]: Products
              - listitem [ref=e31]: Categories
          - listitem [ref=e32]:
            - generic [ref=e33]:
              - generic [ref=e34] [cursor=pointer]:
                - img "Sales" [ref=e36]
                - generic [ref=e37]: Sales
              - generic [ref=e38]: 
            - list:
              - listitem [ref=e40]: Orders
              - listitem [ref=e41]: Invoices
          - listitem [ref=e42]:
            - generic [ref=e43]:
              - generic [ref=e44] [cursor=pointer]:
                - img "System" [ref=e46]
                - generic [ref=e47]: System
              - generic [ref=e48]: 
            - list:
              - listitem [ref=e50]: Site Maintenance
              - listitem [ref=e51]: Logs
              - listitem [ref=e52]: Settings
              - listitem [ref=e53]: Email Queues
          - listitem [ref=e54]:
            - link "Help & Documentation" [ref=e56] [cursor=pointer]:
              - /url: /jandb-admin/help_and_documentation
      - main [ref=e58]:
        - generic [ref=e61]:
          - generic [ref=e62]:
            - img "Logo" [ref=e64] [cursor=pointer]
            - link:
              - /url: /jandb-admin/accounts/accounts
            - navigation [ref=e66]:
              - list [ref=e67]:
                - listitem [ref=e68]:
                  - link "Accounts" [ref=e69] [cursor=pointer]:
                    - /url: /jandb-admin/accounts/accounts
                - listitem [ref=e70]: ">"
                - listitem [ref=e71]:
                  - link "Accounts" [ref=e72] [cursor=pointer]:
                    - /url: /jandb-admin/accounts/accounts
          - generic [ref=e73]:
            - generic [ref=e74]:
              - generic [ref=e75]: DE
              - generic [ref=e76]:
                - generic [ref=e77]: Welcome, Deven SuperAdmin
                - generic [ref=e78]: deven.sawant@3i-infotech.com
            - img "Profile Picture" [ref=e79]
        - generic [ref=e83]:
          - generic [ref=e84]:
            - heading "Manage Accounts" [level=2] [ref=e86]
            - generic [ref=e87]:
              - generic [ref=e89]:
                - generic [ref=e90]: 
                - textbox "Search By Keywords" [ref=e92]
              - generic [ref=e93]:
                - button "Export" [ref=e95] [cursor=pointer]
                - button "Filters" [ref=e100] [cursor=pointer]
          - generic [ref=e106]:
            - table [ref=e108]:
              - rowgroup [ref=e109]:
                - row [ref=e110]:
                  - columnheader [ref=e111]:
                    - generic [ref=e113]:
                      - text: Key
                      - columnheader [ref=e115] [cursor=pointer]
                  - columnheader [ref=e122]:
                    - generic [ref=e124]:
                      - text: Name
                      - columnheader [ref=e126] [cursor=pointer]
                  - columnheader [ref=e133]:
                    - generic [ref=e135]:
                      - text: Type
                      - columnheader [ref=e137] [cursor=pointer]
                  - columnheader [ref=e144]:
                    - generic [ref=e146]:
                      - text: Status
                      - columnheader [ref=e148] [cursor=pointer]
                  - columnheader "Actions" [ref=e155]
              - rowgroup [ref=e156]:
                - row [ref=e157]:
                  - cell "300001185665676" [ref=e158]
                  - cell "Advanced Functional Medicine of Michigan" [ref=e159]
                  - cell "Customer" [ref=e160]
                  - cell "Active" [ref=e161]
                  - cell [ref=e162]
                - row [ref=e167]:
                  - cell "100000007218800" [ref=e168]
                  - cell "Barnes County Ambulance" [ref=e169]
                  - cell "Customer" [ref=e170]
                  - cell "Active" [ref=e171]
                  - cell [ref=e172]
                - row [ref=e177]:
                  - cell "100000013224866" [ref=e178]
                  - cell "Cash" [ref=e179]
                  - cell "Customer" [ref=e180]
                  - cell "Active" [ref=e181]
                  - cell [ref=e182]
                - row [ref=e187]:
                  - cell "100000011460783" [ref=e188]
                  - cell "Center For Hollistic Med." [ref=e189]
                  - cell "Customer" [ref=e190]
                  - cell "Active" [ref=e191]
                  - cell [ref=e192]
                - row [ref=e197]:
                  - cell "100000011326386" [ref=e198]
                  - cell "Halo Flight Inc EMS" [ref=e199]
                  - cell "Customer" [ref=e200]
                  - cell "Active" [ref=e201]
                  - cell [ref=e202]
                - row [ref=e207]:
                  - cell "100000008136770" [ref=e208]
                  - cell "L.S.W. Emergency Services" [ref=e209]
                  - cell "Customer" [ref=e210]
                  - cell "Active" [ref=e211]
                  - cell [ref=e212]
                - row [ref=e217]:
                  - cell "100000008136807" [ref=e218]
                  - cell "Macomb County Medical Control Authority" [ref=e219]
                  - cell "Customer" [ref=e220]
                  - cell "Active" [ref=e221]
                  - cell [ref=e222]
                - row [ref=e227]:
                  - cell "300000097993718" [ref=e228]
                  - cell "MDHHS-WIC Breast Pump Account" [ref=e229]
                  - cell "Customer" [ref=e230]
                  - cell "Active" [ref=e231]
                  - cell [ref=e232]
                - row [ref=e237]:
                  - cell "300000179374594" [ref=e238]
                  - cell "MDNR - P.H. Hoeft State Park" [ref=e239]
                  - cell "Customer" [ref=e240]
                  - cell "Active" [ref=e241]
                  - cell [ref=e242]
                - row [ref=e247]:
                  - cell "100000011465835" [ref=e248]
                  - cell "MDOC - Carson City East Correctional" [ref=e249]
                  - cell "Customer" [ref=e250]
                  - cell "Active" [ref=e251]
                  - cell [ref=e252]
            - generic [ref=e257]:
              - generic [ref=e258]: 1 of 5
              - button "First Page"
              - button "Previous Page" [disabled]
              - generic [ref=e259]:
                - button "1" [ref=e260] [cursor=pointer]
                - button "2" [ref=e261] [cursor=pointer]
                - button "3" [ref=e262] [cursor=pointer]
                - button "4" [ref=e263] [cursor=pointer]
                - button "5" [ref=e264] [cursor=pointer]
              - button "Next Page" [ref=e265] [cursor=pointer]
              - button "Last Page" [ref=e268] [cursor=pointer]
              - generic [ref=e271] [cursor=pointer]:
                - combobox "Rows per page" [ref=e272]: "10"
                - button "dropdown trigger" [ref=e273]
    - generic:
      - alertdialog
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
  40  |         await this.page.goto(
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
> 72  |         await editOption.click();
      |                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  141 |         const logoutItem = this.page.getByText(/logout|log out|sign out/i).last();
  142 |         await expect(logoutItem).toBeVisible({ timeout: 30000 });
  143 |         await logoutItem.click();
  144 |     }
  145 | }
```