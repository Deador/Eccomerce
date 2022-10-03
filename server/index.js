require("dotenv").config()
const express = require("express") // Модули импортируются через require
const sequlize = require("./db")
const models = require("./model/model")
const cors = require("cors")
const path = require('path');
const fileuploader = require("express-fileupload")
const PORT = process.env.PORT || 5000
const app = express()
const routes = require("./routes/index")

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileuploader({}))
app.use("/api", routes)

const start = async () => {
    try {
        await sequlize.authenticate() // Функция подключения к базе
        await sequlize.sync() // Функция для отслежив изменений в базе
        app.listen(PORT, () => console.log(`Server started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start();
