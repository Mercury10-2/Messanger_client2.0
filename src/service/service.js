
import axios from 'axios'

const API_URL = 'http://localhost:8080'
const MESSAGES = 'messages'

class Service {

    getMessages() {
        return axios.get(`${API_URL}/${MESSAGES}`)
    }

    save(message) {
        return axios.post(`${API_URL}/${MESSAGES}`, message)
    }

    update(id, message) {
        return axios.put(`${API_URL}/${MESSAGES}/${id}`, message)
    }

    delete(id) {
        return axios.delete(`${API_URL}/${MESSAGES}/${id}`)
    }

    //  Test
    getUsers() {
        return axios.get(`${API_URL}` + '/users')
    }

    //  Change to login(request) after store implemented
    /*verifyPassword(request) {
        console.log(request)
        return axios.post(`${API_URL}` + '/api/auth/signin', request)
    }*/

    verifyPassword(username, password) {
        return axios.post(`${API_URL}` + '/api/auth/signin' + `/${username}/${password}`)
    }

    registration(name, password, gender, email) {
        return axios.post(`${API_URL}` + '/api/auth/signup' + `/${name}/${password}/${gender}/${email}`)
    }
}

export default new Service()