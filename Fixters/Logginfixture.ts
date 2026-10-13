import { expect, test as base } from '@playwright/test';

type LoginFixtures = {
    loginUrl: string;
};

export const test = base.extend<LoginFixtures>({
    loginUrl: async ({}, use) => {
        await use('https://ems-jbm-dev.jandbmedical.com/jandb-admin/accounts/accounts/edit-account/15198');
    },
});

export { expect };