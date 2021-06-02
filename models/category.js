const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        position: {
            type: Number,
            default: 1,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Category', CategorySchema)
