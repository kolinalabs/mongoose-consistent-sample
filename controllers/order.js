const { Order } = require('../models')

module.exports.index = async (req, res) => {
    const orders = await Order.find({})
    return res.send(orders)
}

module.exports.create = async (req, res) => {
    const order = await Order.create(req.body)
    res.status(201).send(order)
}

module.exports.delete = async (req, res) => {
    try {
        await Order.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (e) {
        res.status(400).send({ message: e.message, ...e })
    }
}
