'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class swimmers extends Model {

    static associate(models) {
    }
}
  // generate the model into BBDD
swimmers.init({
    swimmerId: {
    type: DataTypes.STRING,
    allowNull: false
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    sex: {
    type: DataTypes.STRING,
    allowNull: true
    },
}, {
    sequelize,
    modelName: 'swimmers',
});

return swimmers;

};