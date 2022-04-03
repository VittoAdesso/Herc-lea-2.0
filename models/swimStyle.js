'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class swimStyle extends Model {

    static associate(models) {
        models.swimStyle.hasMany(models.competitions, {
            foreignKey: "styleId", 
            as: "competitions"
        })
    }
}
  // generate the model into BBDD
swimStyle.init({
    styleId: {
    type: DataTypes.STRING,
    allowNull: false
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    howManyPoints: {
    type: DataTypes.DECIMAL,
    allowNull: true
    },
}, {
    sequelize,
    modelName: 'swimStyle',
});

return swimStyle;
};