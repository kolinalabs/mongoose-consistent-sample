const router = require('express').Router()
const Inflector = require('inflected')
const models = require('./models')

/**
 * @todo
 * 
 * This file uses the registered models to configure
 * automatic crud routes, which in this project are
 * used exclusively to explore the plugin's resources.
 * 
 * The focus of this project is the configurations applied to models.
 */

for (const model of Object.values(models)) {
    const basePath = Inflector.pluralize(Inflector.tableize(model.modelName))

    // collection routes
    for (const method of ['get', 'post']) {
        router[method](`/${basePath}`, async (req, res) => {
            try {
                switch (method) {
                    case 'get':
                        const data = await model.find({})
                        return res.send(data)
                    case 'post':
                        const doc = await model.create(req.body)
                        return res.status(201).send(doc)
                }
            } catch ({ message }) {
                res.status(400).send({ message })
            }
        })
    }

    // item routes
    for (const method of ['get', 'put', 'delete']) {
        router[method](`/${basePath}/:id`, async (req, res) => {
            try {
                const item = await model.findById(req.params.id)

                if (!item) {
                    return res.status(404).send()
                }

                switch (method) {
                    case 'get':
                        return res.send(item)
                    case 'put':
                        item.set(req.body)
                        await item.save()
                        return res.send(item)
                    case 'delete':
                        await item.remove()
                        return res.status(204).send()
                }
            } catch ({ message }) {
                res.status(400).send({ message })
            }
        })
    }
}

module.exports = router
