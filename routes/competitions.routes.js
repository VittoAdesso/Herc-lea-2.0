module.exports = app => {
    const competition = require('../controllers/competitions.controller');
    const router = require('express').Router();
    
    //ROUTE TO FIN ALL HAVE STATUS TRUE
    router.get('/statusTrue', competition.findByStatusTrue);
    //ROUTE TO FIN ALL HAVE STATUS FALSE
    router.get('/statusFalse', competition.findByStatusFalse);
    // find one competirion by id 
    router.get('/:id', competition.findOne);
    // // create a new competition
    router.post("/", competition.create);

    //define route gral
    app.use('/api/competition', router);
}

