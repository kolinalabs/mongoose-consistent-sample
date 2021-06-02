const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        default: 1,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    variation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product.variations',
        onDelete: 'set_null'
    },
})

const OrderSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
        },
        items: [ItemSchema],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Order', OrderSchema)
