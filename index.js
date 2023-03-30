// const express = require('express')
// const chalk = require('chalk')
// const mongoose = require('mongoose')
// const authRouter = require('./authRouter.js')
// const PORT = process.env.PORT || 8080

// const app = express()

// app.use(express.json())
// app.use('/auth', authRouter)

// const start = async () => {
//     try {
//         await mongoose.connect(
//             'mongodb+srv://artsanmcc:Authorization1234@cluster0.eawqox5.mongodb.net/?retryWrites=true&w=majority'
//         )
//         app.listen(PORT, () =>
//             console.log(chalk.cyanBright(`Server started on port ${PORT}`))
//         )
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()

const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://artsanmcc:Authorization1234@cluster0.eawqox5.mongodb.net/?retryWrites=true&w=majority'
        )
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
