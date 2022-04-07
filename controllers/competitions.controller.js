const db = require('../models');
const Competition = db.competitions;
// i have to define const SWINSTYLE have value model because is associate, an i want to incluede into the query 
const SwimStyle = db.swimStyle;

// i want to find only competitions have status TRUE or celebrate
exports.findByStatusTrue = async (req, res) => {
    const competitions = await Competition.findAll({
        //here i call the associaton, because i want when i ask they give me all details, see postman
        include: {
            model: SwimStyle,
            as: "swimStyle"
        },
        where: {
            isCelebrate : true
        }
    });
    res.send(competitions);
}

// i want to find only competitions have status FALSE  or NON celebrate
exports.findByStatusFalse = async (req, res) => {
    const competitionsStatus = await Competition.findAll({
        include: {
            model: SwimStyle,
            as: "swimStyle"
        },
        where: {
            isCelebrate : false
        }
    });
    res.send(competitionsStatus);
}

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

// TO CREATE A NEW ONE 
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

