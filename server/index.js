require("dotenv").config()
const express = require("express") // Модули импортируются через require
const sequlize = require("./db")
const models = require("./model/model")
const cors = require("cors")
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.status(200).json({message: "WORKING!"})
})
const start = async () => {
    try {
        await sequlize.authenticate() // Функция подключения к базе
        await sequlize.sync()
        app.listen(PORT, () => console.log(`Server started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start();