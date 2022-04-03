module.exports = app => {
    const competition = require('../controllers/competitions.controller');
    const router = require('express').Router();

    // find one competirion by id 
    router.get('/:id', competition.findOne);

    // // create a new competition
    router.post("/", competition.create);

    //define route gral
    app.use('/api/competition', router);
}

