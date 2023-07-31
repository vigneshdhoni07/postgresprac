const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("school", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});

let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
let student = require("./student")(Sequelize, sequelize);
let teacher = require("./teachers")(Sequelize, sequelize);
let classes = require("./classes")(Sequelize, sequelize);

db.student = student;
db.teacher = teacher;
db.classes = classes;
db.teacher.belongsToMany(db.student, { through: "studenttechers" });
db.student.belongsToMany(db.teacher, { through: "studenttechers" });
db.classes.hasMany(db.student);
db.student.belongsTo(db.classes);
module.exports = db;
