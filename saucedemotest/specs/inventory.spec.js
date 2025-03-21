const { expect } = require('@wdio/globals')
const Login = require('../pages/inventory.page')

describe('My First Test Application', () => {
    it('should login with valid credentials', async () => {

        await Login.open();
        await Login.login('standard_user', 'secret_sauce');
        await Login.checkText('Products');
       
        await Login.open();
        await Login.login('problem_user', 'secret_sauce');
        await Login.checkText('Products');

        await Login.open();
        await Login.login('performance_glitch_user', 'secret_sauce');
        await Login.checkText('Products');

        await Login.open();
        await Login.login('error_user', 'secret_sauce');
        await Login.checkText('Products');

        await Login.open();
        await Login.login('visual_user', 'secret_sauce');
        await Login.checkText('Products');
    })
    it('should display error for invalid credentials', async () => {

        await Login.open();
        await Login.login('standard_user', '12345');
        await Login.checkErrorMessage('Epic sadface: Username and password do not match any user in this service');
       
        await Login.open();
        await Login.login('problem_user_123', 'secret_sauce');
        await Login.checkErrorMessage('Epic sadface: Username and password do not match any user in this service');

        await Login.open();
        await Login.login('performance_glitch_user', 'abcde');
        await Login.checkErrorMessage('Epic sadface: Username and password do not match any user in this service');

        await Login.open();
        await Login.login('error_user', '#45637');
        await Login.checkErrorMessage('Epic sadface: Username and password do not match any user in this service');

        await Login.open();
        await Login.login('visual_user_007', 'secret_sauce');
        await Login.checkErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })
})
