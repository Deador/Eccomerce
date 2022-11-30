const uuid = require("uuid");
const {Device, DeviceInfo} = require("../model/model");
const path = require("path");

class ProductController {
    async getAll(req, res) {
        const product = await Device.findAll();
        return res.json(product);
    }

    async getOne(req, res) {
        const {id} = req.params // Выцепляю id из запроса
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: "info"}]
        })
        return res.json(device)
    }

    async createProduct(req, res) {
        let {name, description, price, old_price, typeId, info, sale} = req.body; // Достаю параметры из тела запроса
        const {img} = req.files; // Достаю файлы из запроса
        let fileName = uuid.v4() + ".jpg"; // Модуль uuid генерит случайное имя
        img.mv(path.resolve(__dirname, "..", "static", fileName)); // Все файлы отправленные с клиента будут попадать в папку static

        // Создание товара в бд. Передаю поля.
        const device = await Device.create({
            name,
            description,
            price,
            old_price,
            typeId,
            sale,
            img: fileName,
        });

        // Если дополнительно пришло поле с информацией о товаре
        if (info) {
            info = JSON.parse(info)
            info.forEach(i => DeviceInfo.create({
                title: i.title, description: i.description, deviceId: device.id
            }))
        }

        return res.json(device);
    }


    async editProduct(req, res) {
        if (!req.body) {
            return res.sendStatus(400)
        }
        let {id, name, description, price, old_price, typeId, sale} = req.body; // Достаю параметры из тела запроса

        const updateDevice = await Device.update({
            where: {id},
            include: [{model: Device, name, description, price, old_price, typeId, sale}]
        })


        // let {name, description, price, old_price, typeId, sale} = req.body; // Достаю параметры из тела запроса
        //
        // const updateDevice = await Device.update(req.body.id, name, description, price, old_price, typeId, sale)
        return res.json(updateDevice)
    }

}

module
    .exports = new ProductController();
