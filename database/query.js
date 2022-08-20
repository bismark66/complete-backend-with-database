/** @format */

const con = require("./index.js");

const datab = {};

datab.fetchAllSchools = () => {
  return new Promise((resolve, reject) => {
    con.query("SELECT * FROM schools", function (error, results) {
      if (error) reject(error);
      resolve(results);
    });
  });
};

datab.fetchSchool = (id) => {
  return new Promise((resolve, reject) => {
    con.query(
      "SELECT * FROM schools WHERE id= ?",
      [id],
      function (error, results) {
        if (error) reject(error);
        resolve(results);
      }
    );
  });
};
datab.deleteSchool = (id) => {
  return new Promise((resolve, reject) => {
    con.query(
      "DELETE FROM schools WHERE id= ?",
      [id],
      function (error, results) {
        if (error) reject(error);
        resolve(results);
      }
    );
  });
};

datab.createSchool = ({ id, name, location }) => {
  return new Promise((resolve, reject) => {
    con.query("INSERT INTO schools (`id`,`name`,`location`) VALUES (?,?,?)", [
      id,
      name,
      location,
    ]),
      function (error, results) {
        if (error) reject(error);
        resolve(results);
      };
  });
};

datab.updateSchool = ({ id, name, location }) => {
  return new Promise((resolve, reject) => {
    con.query("UPDATE schools SET  `name`=?,`location`=? WHERE id=?", [
      name,
      location,
      id,
    ]),
      function (error, results) {
        if (error) reject(error);
        resolve(results);
      };
  });
};

module.exports = datab;
