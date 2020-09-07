export default class User {

    constructor(username, email, password, role, gender, status, created, lastVisit) {
        this.username = username
        this.email = email
        this.password = password
        this.role = role
        this.gender = gender
        this.status = status
        this.created = created
        this.lastVisit = lastVisit
    }
}