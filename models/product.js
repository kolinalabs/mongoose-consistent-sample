const mongoose = require('mongoose')

const VariationSchema = new mongoose.Schema({
    color: String,
    height: Number,
    width: Number,
    length: Number,
    price: Number,
})

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        price: {
            type: Number,
            default: 0,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            // onDelete: 'restrict',
        },
        variations: [VariationSchema],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Product', ProductSchema)
