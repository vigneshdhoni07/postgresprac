let { DataTypes } = require("sequelize");
// let sequelize=new Sequelize({})
module.exports = (Sequelize, sequelize) => {
  const classes = sequelize.define(
    "classes",
    {
      grade: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName: "classes",
    }
  );
  return classes;
};
