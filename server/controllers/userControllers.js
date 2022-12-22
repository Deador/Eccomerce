const bcypt = require("bcrypt")
const {User, Basket} = require("../model/model")
const {where} = require("sequelize");
const jwt = require("jsonwebtoken")

const generate = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: "24h"})
}

class UserControllers {
    async registration(req, res) {
        // Выцепляю email и пароль из запроса
        const {email, password, role} = req.body

        // Если они не подходят то вывожу ошибку
        if (!email || !password) {
            return (console.log("Некорректный email или пароль"))
        }
        // Далее проверяю есть ли пользователь с таким email
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return (res.json({message: "Пользователь уже существует"}))
        }
        // Если пользователь не существует, то шифруем пароль с помощью bcypt
        const hashPassword = await bcypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword});
        const basket = await Basket.create({userId: user.id})

        // Создаю JWT токен, куда шифрую id, email, password, role и секретный ключ и сколько живет токен (24 часа)
        const token = generate(user.id, user.email, user.role)

        // Возвращаю токен на фронт
        return res.json({token})
    }

    async login(req, res) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if (!user) {
            return (res.json({message: "Некорректный email или пароль"}))
        }
        // Сравниваю два пароля, тот что захеширован и тот что указан в запросе
        let comparePassword = bcypt.compareSync(password, user.password);
        if (!comparePassword) {
            return (res.json({message: "Пароль не верный"}))
        }
        const token = generate(user.id, user.email, user.role)
        return res.json({token})
    }

    async auth(req, res) {
        const token = generate(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserControllers()