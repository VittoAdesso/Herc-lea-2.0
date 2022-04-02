'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class registration extends Model {

    static associate(models) {
    }
}
  // generate the model into BBDD
registration.init({
    swimmerId: {
    type: DataTypes.STRING,
    allowNull: false
    },
    competitionId: {
    type: DataTypes.STRING,
    allowNull: false
    },
    whatPosition: {
    type: DataTypes.DECIMAL,
    allowNull: true
    },
}, {
    sequelize,
    modelName: 'registration',
});

return registration;
};