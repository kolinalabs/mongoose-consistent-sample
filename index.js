require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const consistent = require('@kolinalabs/mongoose-consistent')

/**
 * @todo install plugin before models
 */
mongoose.plugin(consistent, {
    // actionDefault: 'cascade',
    // actionKey: 'on_delete'
})

mongoose.connect(
    process.env.MONGODB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    function (error) {
        if (error) {
            console.error(error)
        } else {
            console.info('MongoDB connected')
        }
    }
)

const app = express()

app.use(express.json())
app.use(require('./routes'))

app.listen(9090, function () {
    console.log('App started')
})
