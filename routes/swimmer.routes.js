module.exports = app => {
    const swimmer = require('../controllers/swimmer.controller');
    const router = require('express').Router();

    //find all swimmer
    router.get('/', swimmer.findAll);

    // find a one swimmer 
    router.get('/:id', swimmer.findOne);

    //define route gral
    app.use('/api/swimmer', router);
}

