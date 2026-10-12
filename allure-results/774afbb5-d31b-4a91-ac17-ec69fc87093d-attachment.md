# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Addingaddress.spec.ts >> add a contact address to an account
- Location: tests\Addingaddress.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByText(/^Rta Ofc Kondapur$/i).first()
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/^Rta Ofc Kondapur$/i).first()
    13 × locator resolved to <span class="ng-star-inserted" _ngcontent-ng-c3328349705="">Rta Ofc Kondapur</span>
       - unexpected value "hidden"

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- navigation "Admin navigation":
  - img "Logo"
  - list:
    - listitem:
      - img "Accounts"
      - text: Accounts 
      - list:
        - listitem: Accounts
        - listitem: Users
        - listitem: Roles
    - listitem:
      - img "Inventory"
      - text: Inventory 
      - list:
        - listitem: Products
        - listitem: Categories
    - listitem:
      - img "Sales"
      - text: Sales 
      - list:
        - listitem: Orders
        - listitem: Invoices
    - listitem:
      - img "System"
      - text: System 
      - list:
        - listitem: Site Maintenance
        - listitem: Logs
        - listitem: Settings
        - listitem: Email Queues
    - listitem:
      - link "Help & Documentation":
        - /url: /jandb-admin/help_and_documentation
- main:
  - img "Logo"
  - link:
    - /url: /jandb-admin/accounts/accounts
  - navigation:
    - list:
      - listitem:
        - link "Accounts":
          - /url: /jandb-admin/accounts/accounts
      - listitem: ">"
      - listitem:
        - link "Accounts":
          - /url: /jandb-admin/accounts/accounts
      - listitem: ">"
      - listitem:
        - link "Edit - Advanced Functional Medicine of Michigan":
          - /url: /jandb-admin/accounts/accounts/edit-account/15198
  - text: DE Welcome, Deven SuperAdmin deven.sawant@3i-infotech.com
  - img "Profile Picture"
  - tablist:
    - tab "basicBasic Information":
      - img "basic"
      - text: Basic Information
    - tab "addressAddresses" [selected]:
      - img "address"
      - text: Addresses
    - tab "usersUsers":
      - img "users"
      - text: Users
    - tab "pricePrice List":
      - img "price"
      - text: Price List
    - tab "attributesAttributes":
      - img "attributes"
      - text: Attributes
  - tabpanel "addressAddresses":
    - heading "Account Addresses" [level=3]
    - img "info"
    - button " Add Address"
    - heading "Note" [level=4]
    - paragraph: Only one address should be set as Is Billing and one set as Is Primary (Shipping).
    - text: Default Billing*
    - combobox "Select Billing Address": 3492 Edgewood Park Commerce Michigan 48382 United States Of America
    - button:
      - img
    - text: Default Shipping
    - combobox "Select Shipping Address"
    - button:
      - img
    - heading "Address Management" [level=3]
    - text: 
    - textbox "Search By Keywords"
    - button "Export":
      - img
      - text: Export
    - button "Filters":
      - img
      - text: Filters
    - button "Card View":
      - img
      - text: Card View
    - button "List View":
      - img
      - text: List View
    - text: T-000036
    - img
    - text: Contact Address
    - img
    - text: Address 1777 Axtell Michigan, Tryoy, 468673 Us
    - button "Edit Image Icon Edit":
      - img "Edit Image Icon"
      - text: Edit
    - button "Delete Image Icon Delete":
      - img "Delete Image Icon"
      - text: Delete
    - text: T-000072
    - img
    - text: Contact Address
    - img
    - text: Address Hyderabad Hyderabad Hyderabad, Telangana, 500084 India
    - button "Edit Image Icon Edit":
      - img "Edit Image Icon"
      - text: Edit
    - button "Delete Image Icon Delete":
      - img "Delete Image Icon"
      - text: Delete
    - text: T-000073
    - img
    - text: Contact Address
    - img
    - text: Address Hyderabad Rta Ofc Kondapur Hyderabad, Telangana, 500084 India
    - button "Edit Image Icon Edit":
      - img "Edit Image Icon"
      - text: Edit
    - button "Delete Image Icon Delete":
      - img "Delete Image Icon"
      - text: Delete
    - text: T-000074
    - img
    - text: Contact Address
    - img
    - text: Address Hyderabad Rta Ofc Kondapur Hyderabad, Telangana, 500084 India
    - button "Edit Image Icon Edit":
      - img "Edit Image Icon"
      - text: Edit
    - button "Delete Image Icon Delete":
      - img "Delete Image Icon"
      - text: Delete
    - text: "3453890"
    - img
    - text: Enterprise Address
    - img
    - text: Address 3492 Edgewood Park Commerce, Michigan, 48382 United States Of America
    - button "Edit Image Icon Edit" [disabled]:
      - img "Edit Image Icon"
      - text: Edit
    - button "Delete Image Icon Delete":
      - img "Delete Image Icon"
      - text: Delete
    - text: "3453894"
    - img
    - text: Enterprise Address
    - img
    - text: Address 1777 Axtell Dr Suite 207 Troy, Michigan, 48084 United States Of America
    - button "Edit Image Icon Edit" [disabled]:
      - img "Edit Image Icon"
      - text: Edit
    - button "Delete Image Icon Delete":
      - img "Delete Image Icon"
      - text: Delete
    - text: T-000075
    - img
    - text: Contact Address
    - img
    - text: Address Hyderabad Rta Ofc Kondapur Hyderabad, Telangana, 500084 India
    - button "Edit Image Icon Edit":
      - img "Edit Image Icon"
      - text: Edit
    - button "Delete Image Icon Delete":
      - img "Delete Image Icon"
      - text: Delete
    - button "First Page":
      - img
    - button "Previous Page" [disabled]:
      - img
    - button "1"
    - button "Next Page" [disabled]:
      - img
    - button "Last Page" [disabled]:
      - img
    - combobox "Rows per page": "10"
    - button "dropdown trigger":
      - img
  - button "back Back To Accounts":
    - img "back"
    - text: Back To Accounts
  - button "save Save":
    - img "save"
    - text: Save
- alertdialog
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { logginHomepage } from '../Pages_POM/Logginpage';
  3  | 
  4  | test('add a contact address to an account', async ({ page }) => {
  5  |     const { JBM_ADMIN_USERNAME: username, JBM_ADMIN_PASSWORD: password } = process.env;
  6  | 
  7  |     if (!username || !password) {
  8  |         throw new Error(
  9  |             'Missing admin credentials. Set JBM_ADMIN_USERNAME and JBM_ADMIN_PASSWORD in the environment before running this test.'
  10 |         );
  11 |     }
  12 | 
  13 |     const homepage = new logginHomepage(page);
  14 |     await homepage.navigateToLoginPage();
  15 |     await homepage.loginIntoApplication(username, password);
  16 |     await homepage.verifyAdminName();
  17 |     await homepage.clickAccountsFromSidebar();
  18 |     await homepage.selectAccountRecord('Advanced Functional Medicine of Michigan');
  19 | 
  20 |     await page.getByRole('tab', { name: /Addresses/i }).click();
  21 |     await expect(page.getByRole('heading', { name: 'Account Addresses' })).toBeVisible();
  22 |     await page.getByRole('button', { name: /Add Address/i }).click();
  23 | 
  24 |     await page.getByPlaceholder('Enter First Name').fill('Peddaiah');
  25 |     await page.getByPlaceholder('Enter Last Name').fill('Ramigalla');
  26 |     await page.getByPlaceholder('Enter Country').fill('India');
  27 |     await page.getByPlaceholder('Enter Address').nth(0).fill('Hyderabad');
  28 |     await page.getByPlaceholder('Enter Address').nth(1).fill('RTA ofc Kondapur');
  29 |     await page.getByPlaceholder('Enter State').fill('Telangana');
  30 |     await page.getByPlaceholder('Enter City').fill('Hyderabad');
  31 |     await page.getByPlaceholder('Enter Postal Code').fill('500084');
  32 | 
  33 |     await page.getByRole('complementary')
  34 |         .getByRole('button', { name: 'Save', exact: true })
  35 |         .click();
  36 | 
  37 |     await expect(page.getByText('Address added successfully.')).toBeVisible();
> 38 |     await expect(page.getByText(/^Rta Ofc Kondapur$/i).first()).toBeVisible();
     |                                                                 ^ Error: expect(locator).toBeVisible() failed
  39 | });
  40 | 
```