const db = require('../models');
const Competition = db.competitions;
const SwimStyle = db.swimStyle;

// findOne by id, controlling errors in case dont find an exist one
exports.findOne = async (req, res) => {
    const id = req.params.id; 
    try { 
    const competition = await Competition.findOne({
        where: {
            id 
        },
    });
    if (competition) { 
        return res.status(200).json(competition);
    } 
    else { 
        return res.status(404).json('No Competition found by this id'); } 
    } 
    catch (err) { return res.status(500).json(err); } 
};

exports.create = async (req, res) => {
    // Validate request
    if (!req.body.competitionId) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    return;
    }
    // Create a constant with struture of new newCompetition
    const newCompetition = {
        competitionId: req.body.competitionId,
        nameCompetition:  req.body.nameCompetition,
        styleId:  req.body.styleId,
        isCelebrate:  req.body.isCelebrate        
    };
    // Create and Save new in the database
    Competition.create(newCompetition)
    .then(newCompetitionOne => {
        res.send(newCompetitionOne);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the new newCompetition"
        });
    });
};


