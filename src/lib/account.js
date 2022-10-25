class Account {
    static getAccessToken() {
        return localStorage.getItem('accessToken') || '';
    }

    static setAccessToken(accessToken) {
        localStorage.setItem('accessToken', accessToken);
    }

    static setAccount(data) {
        localStorage.setItem('account', JSON.stringify(data));
    }

    static getAccount() {
        return JSON.parse(localStorage?.getItem('account')) || {};
    }

    static delete() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('account');
    }
}

export default Account;
