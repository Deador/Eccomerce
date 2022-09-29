const Router = require("express")
const router = new Router()
const productRouter = require("./productRouter")
const userRouter = require("./userRouter")
const typeRouter = require("./typeRouter")

// Объединяю роуты (пути) в index.js. При обращении по этим урлам будут приходить ответы
router.use("/user", userRouter)
router.use("/product", productRouter)
router.use("/type", typeRouter)

module.exports = router