const express = require("express");

const app = express();
const db = require("./model");
app.use(express.json());

async function Db() {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
Db();
let { student, teacher, classes } = db;
//  let temp = db.sequelize.define({});

app.post("/", async (req, res) => {
  try {
    // await classes.create({ grade: 9 });
    // await student.create({ name: "dinesh", age: 14, classGrade: 9 });
    // let teach = await teacher.create({ name: "dhoni", subject: "physics" });
    res.json({ message: "Creation Success" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: new Error(error).message || "something went wrong" });
  }
});
app.get("/", async (req, res) => {
  let allstudents = await student.findAll();
  let allteachers = await teacher.findAll();
  let cls = await classes.findOne({ where: { grade: 9 } });
  console.log(Object.getOwnPropertyNames(cls));
  let std = await cls.getStudents();
  res.json({
    students: allstudents,
    teachers: allteachers,
    classes: cls,
    student: std,
  });
});
app.listen(6000, () => {
  console.log("app running at 6000");
});
