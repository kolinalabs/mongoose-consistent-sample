const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        default: 1,
    },
    /**
     * Behaviors
     * set_null: Field is set to null
     * cascade: This document is removed
     * restrict: ConstraintError is dispatched
     * {Function}: Callback executed
     */
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    /**
     * Behaviors
     * set_null: Field is set to null
     * cascade: This document is removed
     * restrict: ConstraintError is dispatched
     * {Function}: Callback executed
     */
    variation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product.variations',
        onDelete: 'set_null',
    },
})

const OrderSchema = new mongoose.Schema(
    {
        /**
         * Behaviors
         * set_null: Field is set to null
         * cascade: This document is removed
         * restrict: ConstraintError is dispatched
         * {Function}: Read the function instruction below
         */
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
