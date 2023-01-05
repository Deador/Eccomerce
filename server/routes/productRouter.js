const Router = require("express")
const router = new Router()
const productController = require("../controllers/productController")

router.get("/", productController.getAll)
router.get("/:id", productController.getOne)
router.post("/", productController.createProduct)
router.put("/", productController.updateProduct)
router.delete("/:id", productController.deleteProduct)

module.exports = router