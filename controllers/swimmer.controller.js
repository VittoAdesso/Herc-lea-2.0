const db = require('../models');
const Swimmer = db.swimmers;

// findOne by id, controlling errors in case dont find an exist one
exports.findOne = async (req, res) => {
    const id = req.params.id; 
    try { 
    const swimmer = await Swimmer.findOne({
        where: {
            id 
        },
    });
    if (swimmer) { 
        return res.status(200).json(swimmer);
    } 
    else { 
        return res.status(404).json('No Swimmer found by this id'); } 
    } 
    catch (err) { return res.status(500).json(err); } 
};

exports.create = async (req, res) => {
    // Validate request
    if (!req.body.swimmerId) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    return;
    }
    // Create a constant with struture of new newSwimmer
    const newSwimmer = {
        swimmerId: req.body.swimmerId,
        name: req.body.name,
        sex: req.body.sex,
    };
    // Create and Save new in the database
    Swimmer.create(newSwimmer)
    .then(newSwimmerOne => {
        res.send(newSwimmerOne);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the new newSwimmer"
        });
    });
};


