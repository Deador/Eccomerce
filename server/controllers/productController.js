const {Type} = require("../model/model");

class ProductController {
    async getAll(req, res) {
        const product = await Type.findAll()
        return res.json(product)
    }

    async getOne(req, res) {

    }

    async createProduct(req, res) {

    }
}

module.exports = new ProductController()