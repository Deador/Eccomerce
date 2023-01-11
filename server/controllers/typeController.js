const {Type, Device, DeviceInfo} = require("../model/model");

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

    async deleteType(req, res) {
        const {id} = req.params
        const type = await Type.destroy({where: {id}})
        return res.json({message: "Тег удален"});
    }

    async updateType(req, res) {
        let {id, name} = req.body; // Достаю параметры из тела запроса
        const type = await Type.findOne({
            where: {id},
        })
        type.update({name})
        return res.json(type);
    }
}

module.exports = new TypeController()