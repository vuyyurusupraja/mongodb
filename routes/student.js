const express = require("express");
const router = express.Router();
const student = require("../models/student");
var mongo = require("mongodb");
router.post("/createStudent", (req, res) => {
  // try {
  const userData = req.body;
  // if (userData.email && userData.email !== '' && userData.password && userData.password !== '') {
  // const hashPassword = require('crypto').createHash('md5').update(userData.password).digest('hex');
  const db = new student();
  db.firstName = userData.firstName;
  db.lastName = userData.lastName;
  db.email = userData.email;
  db.mobileNumber = userData.mobileNumber;
  db.password = userData.password;

  db.save(function (err, userFound) {
    if (err) {
      response = { success: false, msg: err };
      res.json(response);
    } else {
      response = { success: true, msg: "student registered successfully" };
      res.json(response);
    }
  });
});

module.exports = router;
