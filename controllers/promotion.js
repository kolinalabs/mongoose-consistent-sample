const { Promotion } = require('../models')

module.exports.index = async (req, res) => {
    const promotions = await Promotion.find({})
    return res.send(promotions)
}

module.exports.create = async (req, res) => {
    const promotion = await Promotion.create(req.body)
    res.status(201).send(promotion)
}

module.exports.delete = async (req, res) => {
    try {
        await Promotion.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (e) {
        res.status(400).send({ message: e.message, ...e })
    }
}
