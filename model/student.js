const { DataTypes } = require("sequelize");
module.exports = (Sequelize, sequelize) => {
  const student = sequelize.define(
    "students",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "students",
    }
  );
  return student;
};
