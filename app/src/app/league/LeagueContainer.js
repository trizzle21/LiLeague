import config from 'config';

export const UserService {
    login,
    logout,
};

function login (username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
}

