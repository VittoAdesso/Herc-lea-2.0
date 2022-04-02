'use strict'; // INTO ECMAScript 6 IS NOT NECESSARY TO USE VITTO ... OK?

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class competitions extends Model {

    static associate(models) {
    }
}
  // generate the model into BBDD
competitions.init({
    competitionId: {
    type: DataTypes.STRING,
    allowNull: false
    },
    nameCompetition: {
    type: DataTypes.STRING,
    allowNull: false
    },
    styleId: {
    type: DataTypes.DECIMAL,
    allowNull: true
    },
    isCelebrate: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'competitions',
});

return competitions;
};