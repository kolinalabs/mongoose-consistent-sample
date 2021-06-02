const { Category } = require('../models')

module.exports.index = async (req, res) => {
    const categories = await Category.find({})
    return res.send(categories)
}

module.exports.create = async (req, res) => {
    const category = await Category.create(req.body)
    res.status(201).send(category)
}

module.exports.delete = async (req, res) => {
    try {
        await Category.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (e) {
        res.status(400).send({ message: e.message, ...e })
    }
}
