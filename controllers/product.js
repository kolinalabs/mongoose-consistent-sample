const { Product } = require('../models')

module.exports.index = async (req, res) => {
    const products = await Product.find({}, {}, { sort: '-createdAt' })
    return res.send(products)
}

module.exports.create = async (req, res) => {
    const product = await Product.create(req.body)
    res.status(201).send(product)
}

module.exports.delete = async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id })
        // const product = await Product.findById(req.params.id)
        // await product.remove()

        res.status(204).send()
    } catch (e) {
        res.status(400).send({ message: e.message, ...e })
    }
}
