const express = require("express");
const mongoose = require("mongoose");

let app = express();

async function connect() {
  let connection = await mongoose.connect("mongodb://0.0.0.0:27017/Students");
  if (!connection) {
    console.log("noo");
  } else {
    console.log("good");
  }
}
connect();
const StudentsSchema = new mongoose.Schema({
  Studentname: String,
  age: Number,
  phone: String,
  Email: String,
  address: String,
  id: Number,
});

let Studentsmodel = new mongoose.model("Students", StudentsSchema);

const coursesSchema = new mongoose.Schema({
  coursesname: String,
  price: Number,
  numberofparticipants: String,
});

let coursesmodel = new mongoose.model("courses", coursesSchema);

let newuser = new Studentsmodel({
  Studentname: "Ahmed Omar",
  age: "23",
  phone: "01254789452",
  Email: "Ahmed Omar@gmail.com",
  address: "ismailia",
  id: "2548",
}).save();

let AhmedUser = new Studentsmodel({
  Studentname: "Mohamed Elsayed",
  age: "22",
  phone: "01687954218",
  Email: "Mohamed Elsayed@gmail.com",
  address: "Zagazig",
  id: "3569",
}).save();

let MohamedElsayed = new Studentsmodel({
  Studentname: "Abo Hanfi",
  age: "23",
  phone: "01128761052",
  Email: "Abo Hanfi@gmail.com",
  address: "Zagazig",
  id: "1218",
}).save();

let Newunser = new coursesmodel({
  coursesname: "IT",
  price: "25 ",
  numberofparticipants: "13",
}).save();

let it = new coursesmodel({
  coursesname: "IS",
  price: "30 ",
  numberofparticipants: "17",
}).save();

let Newuser = new coursesmodel({
  coursesname: "cs",
  price: "22 ",
  numberofparticipants: "10",
}).save();

app.get("/Students", async (req, res) => {
  let allStudents = await Studentsmodel.find();
  res.status(200);
  console.log(allStudents.length);
  res.json(allStudents);
});

app.get("/Courses", async (req, res) => {
  let allCourses = await coursesmodel.find();
  res.status(200);
  console.log(allCourses.length);
  res.json(allCourses);
});

app.listen(3000, function () {
  console.log("server now is opend");
});