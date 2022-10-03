const uuid = require("uuid");
const { Device } = require("../model/model");
const path = require("path");

class ProductController {
  async getAll(req, res) {
    const product = await Device.findAll();
    return res.json(product);
  }

  async getOne(req, res) {}

  async createProduct(req, res) {
    let { name, price, old_price, typeId, info } = req.body; // Достаю параметры из тела запросы
    const { img } = req.files; // Достаю файлы из запроса
    let fileName = uuid.v4() + ".jpg"; // Модуль uuid генерит случайное имя
    img.mv(path.resolve(__dirname, "..", "static", fileName)); // Все файлы отправленные с клиента будут попадать в папку static
    // const product = await Device.create({name, price, old_price, typeId})
    const device = await Device.create({
      name,
      price,
      old_price,
      typeId,
      img: fileName,
    });
    return res.json(device);
  }
}

module.exports = new ProductController();
