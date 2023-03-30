const jwt = require('jsonwebtoken')
const { secret } = require('../config')
const chalk = require('chalk')
module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        console.log(chalk.red(token))
        if (!token) {
            return res
                .status(403)
                .json({ message: 'Пользователь не авторизован 1' })
        }
        const decodedData = jwt.verify(token, secret)
        console.log(chalk.yellow(decodedData))
        req.user = decodedData
        next()
    } catch (error) {
        console.log(error)
        return res
            .status(403)
            .json({ message: 'Пользователь не авторизован 2' })
    }
}
