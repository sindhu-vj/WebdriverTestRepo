const { expect } = require('@wdio/globals')
const Login = require('../pages/login')

describe('My First Test Application', () => {
    it('should login with valid credentials', async () => {
        // Open sauce demo login page
        await Login.open();

        // Login to sauce demo page
        await Login.login('visual_user', 'S12345');
       
    })
})
