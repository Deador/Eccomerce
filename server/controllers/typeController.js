const {Type} = require("../model/model");

class TypeController {
    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

    async createType(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }
}

module.exports = new TypeController()