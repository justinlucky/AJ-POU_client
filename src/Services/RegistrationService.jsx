class RegistrationServices {
    apiUrl = 'http://localhost:7000';

    async makeRequest(endpoint, method, data) {
        const url = `${this.apiUrl}/${endpoint}`;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(`Error during ${method} request to ${url}`, error);
            throw new Error(`Failed to ${method} ${url}`);
        }
    }

    async handleSignUp(username, email, mobile, password) {
        return this.makeRequest('signup', 'post', { username, email, mobile, password });
    }

    async handleLogin(email, mobile, password) {
        return this.makeRequest('login', 'post', { email, mobile, password });
    }

    async handleResetPassword(email, mobile, newPassword) {
        return this.makeRequest('forgot/password', 'post', { email, mobile, newPassword });
    }

    async handleLogOut(username, email) {
        return this.makeRequest('user/logout', 'post', { username, email});
    }
}

const Register = new RegistrationServices();

export default Register;
