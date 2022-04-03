module.exports = app => {
    const swimmer = require('../controllers/swimmer.controller');
    const router = require('express').Router();

    // find a one swimmer 
    router.get('/:id', swimmer.findOne);

    // create a new swimmer
    router.post("/", swimmer.create);

    //define route gral
    app.use('/api/swimmer', router);
}

