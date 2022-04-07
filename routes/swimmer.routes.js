module.exports = app => {
    const swimmer = require('../controllers/swimmer.controller');
    const router = require('express').Router();
    // create helper into file js, is a function 
    const validations = require('./validations'); 
    // find a one swimmer 
    router.get('/:id', swimmer.findOne);
    // create a new swimmer but i create type of middleware in level route, when i send post verify firts
    // also is a middleware by helper, and i have to call up like const and call js (if you dont remeber see video)
    // you want first validate camps !!! after executed
    router.post("/", validations.validate(validations.createSwimmerValidation), swimmer.create);
    //define route gral
    app.use('/api/swimmer', router);
}

