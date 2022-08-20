/** @format */

const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "oyesdatabase",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connection was established");
});

module.exports = con;
