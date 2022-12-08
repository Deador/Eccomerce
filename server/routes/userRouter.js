const Router = require("express")
const router = new Router()
const userController = require("../controllers/userControllers")
const authMiddleware = require("../middle/authMiddleware")

router.post("/registration", userController.registration)
router.post("/login", userController.login)
router.get("/auth", authMiddleware, userController.auth)

module.exports = router