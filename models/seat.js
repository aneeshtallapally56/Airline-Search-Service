'use strict';
const {
  Model
} = require('sequelize');
const { Enums } = require('../src/utils/common');
const{BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS} = Enums.SEAT_TYPE; 
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       this.belongsTo(models.Airplanes,{
        foreignKey: 'airplaneId',

      });
    }
  }
  Seat.init({
    airplaneId: {type:DataTypes.INTEGER,allowNull:false},
    row: {type:DataTypes.INTEGER,allowNull:false},
    col: {type:DataTypes.STRING,allowNull:false},
    type:{type:DataTypes.ENUM,allowNull:false,
      values:[BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
      defaultValue:ECONOMY
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};