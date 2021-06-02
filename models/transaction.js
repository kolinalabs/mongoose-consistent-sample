const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema(
    {
        description: {
            type: String,
        },
        amount: {
            type: Number,
            default: 1,
        },
        source: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'sourceType',
        },
        sourceType: {
            type: String,
            enum: ['Product', 'Customer', 'Order', 'None'],
            default: 'None',
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Transaction', TransactionSchema)
