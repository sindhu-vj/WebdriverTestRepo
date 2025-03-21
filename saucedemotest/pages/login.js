const { $ } = require('@wdio/globals')

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

    async login (username, password) {
        await this.getUsername.setValue(username);
        await this.getPassword.setValue(password);
        await this.btnClick.click();
    }

    open () {
        return browser.url(`https://saucedemo.com/`);
    }
}

module.exports = new Login();
