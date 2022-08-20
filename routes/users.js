/** @format */

var express = require("express");
var router = express.Router();
let schools = require("../public/javascripts/index.js");
let uuid = require("uuid");
let datab = require("../database/query");

///get all members
router.get("/getAll", async (req, res) => {
  try {
    let schoola = await datab.fetchAllSchools();
    res.json(schoola).status(200);
  } catch (error) {
    res.json({ error: "there was a problem" }).status(400);
  }

  console.log(worked);
});

/* GET users listing. */
router.get("/:id", async (req, res) => {
  // when working with the index.js created databse or the school database imported from public/javascripts/index.js

  // console.log(req.params.id);
  // // let schools = Array.from(schools);
  // const found = schools.some((school) => school.id === parseInt(req.params.id));
  // if (found) {
  //   res.json(schools.filter((school) => school.id == req.params.id));
  // } else res.status(400).json({ msg: `not found` });
  // // res.send('respond with a resource');
  try {
    let schoola = await datab.fetchSchool(req.params.id);
    res.json(schoola).status(200);
  } catch (error) {
    res.json({ error: "not found" });
  }
});

//post member
router.post("/", async (req, res) => {
  // when working with the index.js created databse or the school database imported from public/javascripts/index.js

  // const newSchool = {
  //   id: uuid.v4(),
  //   name: req.body.name,
  //   location: req.body.location,
  //   // status: "active",
  // };
  // schools.push(newSchool);
  // res.send(schools);
  let { id, name, location } = req.body;
  try {
    let results = await datab.createSchool({ id, name, location });
    res.json("successfully added ").status(200);
  } catch (error) {
    res.json({ error: "not found" }).status(400);
  }
});

///edit member
router.put("/:id", async (req, res) => {
  // when working with the index.js created databse or the school database imported from public/javascripts/index.js

  // const found = schools.some((school) => school.id === parseInt(req.params.id));
  // found &&
  //   schools.forEach((school) => {
  //     if (school.id === parseInt(req.params.id)) {
  //       school.name = req.body.name ? req.body.name : school.name;
  //       school.location = req.body.location
  //         ? req.body.location
  //         : school.location;
  //       res.json(school);
  //     }
  //   });
  // !found &&
  //   res
  //     .status(400)
  //     .json({ msg: `could not find school with id ${req.params.id}` });

  let { id, name, location } = req.body;
  try {
    let results = await datab.updateSchool({ id, name, location });
    res.json("successfully added ").status(200);
  } catch (error) {
    res.json({ error: "not found" }).status(400);
  }
});

///delete a member
router.delete("/:id", async (req, res) => {
  // when working with the index.js created databse or the school database imported from public/javascripts/index.js

  // const found = schools.some((school) => school.id === parseInt(req.params.id));
  // found &&
  //   res
  //     .json(schools.filter((school) => school.id != parseInt(req.params.id)))
  //     .status(200);

  // !found &&
  //   res.status(400).json({ msg: `school with id ${req.params.id} not found` });

  try {
    let schoola = await datab.deleteSchool(req.params.id);
    res.json(schoola).status(200);
  } catch (error) {
    res.json({ error: "not found" });
  }
});

module.exports = router;
