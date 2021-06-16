const mongoose = require('mongoose')

const PromotionSchema = new mongoose.Schema(
    {
        description: {
            type: String,
        },
        startAt: {
            type: Date,
        },
        endAt: {
            type: Date,
        },
        discount: {
            type: Number,
            default: 0,
        },
        /**
         * Behaviors
         * set_null/cascade: The ObjectId is removed from the array
         * restrict: ConstraintError is dispatched
         */
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                onDelete: 'restrict',
            },
        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Promotion', PromotionSchema)
