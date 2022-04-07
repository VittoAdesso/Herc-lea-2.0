const db = require('../models');
const Registration = db.registration;

// findOne by id, controlling errors in case dont find an exist one
exports.findOne = async (req, res) => {
    const id = req.params.id; 
    try { 
    const register = await Registration.findOne({
        where: {
            id 
        },
    });
    if (register) { 
        return res.status(200).json(register);
    } 
    else { 
        return res.status(404).json('No Registration found by this id'); } 
    } 
    catch (err) { return res.status(500).json(err); } 
};

// exports.create = async (req, res) => {
//     try{
//         const newRegistration = await model.Registration.bulkCreate(req.body) 
//             res.status(200).json({
//                 message: "Registration",
//                 data: newRegistration
//             })
//     }
//     catch(err){
//         res.status(404).json({
//             message:"Some error occurred while creating the new newRegistration"
//         });
//     }
// };

//use to create on3 
exports.create = async (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    return;
    }
    // Create a constant with struture of new newRegistration
    const newRegistration = {
        swimmerId: req.body.swimmerId,
        competitionId:  req.body.competitionId,
    };
    // Create and Save new in the database
    // Registration.bulkCreate(newRegistration)
    Registration.create(newRegistration)
    .then(newRegistration => {
        res.send(newRegistration);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the new newRegistration"
        });
    });
};

