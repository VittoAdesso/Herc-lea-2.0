module.exports = app => {
    const register = require('../controllers/registration.controller');
    const router = require('express').Router();
    
    // find a one register 
    router.get('/:id', register.findOne);
    // to create one
    router.post("/", register.create);
    //define route gral
    app.use('/api/register', router);
}

