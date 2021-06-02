const { Transaction } = require('../models')

module.exports.index = async (req, res) => {
    const transactions = await Transaction.find({})
    return res.send(transactions)
}

module.exports.create = async (req, res) => {
    const transaction = await Transaction.create(req.body)
    res.status(201).send(transaction)
}
