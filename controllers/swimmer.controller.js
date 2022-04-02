const db = require('../models');
const Swimmer = db.swimmers;

// to find all swimmers 
exports.findAll = async (req, res) => {
    const swimmers = await Swimmer.findAll();
    res.send(swimmers);
}

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



