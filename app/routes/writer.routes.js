module.exports = app => {
    const writer = require("./../controller/writer.controller")
    let router = require('express').Router();

    router.post('/', writer.createWriter)

    router.get('/', writer.findAllWriter)

    router.get('/:id', writer.findById)

    router.put('/:id', writer.updateWriter)

    router.delete('/:id', writer.deleteWriter)

    router.delete('/', writer.deleteAllWriter)
    
    router.get('/category/:category', writer.findWriterByCategory)
    
    app.use('/api/writers', router)
}