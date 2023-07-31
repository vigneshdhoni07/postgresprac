const { DataTypes, Sequelize } = require("sequelize");

// let sequelize = new Sequelize({});
module.exports = (Sequelize, sequelize) => {
  const Teacher = sequelize.define(
    "teachers",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subject: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "teachers",
    }
  );
  return Teacher;
};
