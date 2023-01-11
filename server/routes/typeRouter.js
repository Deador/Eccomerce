const Router = require("express")
const router = new Router()
const typeController = require("../controllers/typeController")

router.get("/", typeController.getAll)
router.post("/", typeController.createType)
router.delete("/:id", typeController.deleteType)
router.put('/', typeController.updateType)

module.exports = router