import axios from 'axios'

const API_URL = 'http://localhost:8080/api/auth/'

class AuthService {

    login(user) {
        return axios
            .post(API_URL + 'signin', { username: user.username, password: user.password })
            .then(response => {
                if (response.data.token)
                    localStorage.setItem('user', JSON.stringify(response.data))
            return response.data
            })
    }

    logout() {
        localStorage.removeItem('user')
    }

    register(user) {
        console.log('authService: ' + user)
        return axios.post(API_URL + 'signup', {
            username: user.username,
            password: user.password,
            gender: user.email,
            email: user.email
        })
    }
}

export default new AuthService()