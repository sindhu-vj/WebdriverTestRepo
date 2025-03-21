const { $ } = require('@wdio/globals')
const sleep = ms => new Promise(r => setTimeout(r, ms));

class Login {
    
    get getUsername () {
        return $('#user-name');
    }

    get getPassword () {
        return $('#password');
    }

    get btnClick () {
        return $('#login-button');
    }

    get getProductHeader () {
        return $('span.title');
    }

    get getErrorMessage () {
        return $('.error-message-container.error');
    }

    open () {
        return browser.url(`https://saucedemo.com/`);
    }
    
    async login (username, password) {
        await sleep (500);
        await this.getUsername.setValue(username);
        await sleep (500);
        await this.getPassword.setValue(password);
        await sleep (500);
        await this.btnClick.click();
        await sleep (500);
    }

    async checkText (item) {
        await expect(this.getProductHeader).toHaveText(item);
    }

    async checkErrorMessage (msg) {
        await expect(this.getErrorMessage).toHaveText(msg);
    }

}

module.exports = new Login();
