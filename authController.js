const User = require('./models/User')
const Role = require('./models/Role')

class authController {
    async registration(req, res) {
        try {
        } catch (error) {
            console.log(error)
        }
    }

    async login(req, res) {
        try {
        } catch (error) {
            console.log(error)
        }
    }

    async getUsers(req, res) {
        try {
            const userRole = new Role()
            const adminRole = new Role({ value: 'ADMIN' })
            await userRole.save()
            await adminRole.save()
            res.json('server work')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new authController()