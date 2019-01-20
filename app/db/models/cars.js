'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define('Cars', {
    nomer: DataTypes.STRING,
    marka: DataTypes.STRING,
    model: DataTypes.STRING,
  }, {});
  Cars.associate = function(models) {
    models.Cars.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Cars;
};