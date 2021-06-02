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
        /**
         * Behaviors
         * set_null: Field is set to null
         * cascade: This document is removed
         * restrict: ConstraintError is dispatched
         * {Function}: Read the function instruction below
         */
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            // onDelete: 'restrict',
            /**
             * If you want to control the behavior of an action after counting,
             * you can use a function instead of a name.
             * 
             * This function receives the object with text,
             * containing important information for deciding what to do.
             */
            // onDelete(context) {
            //     console.log(context)
            //     throw new Error('Disptached error using function action')
            // }
        },
        variations: [VariationSchema],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Product', ProductSchema)
