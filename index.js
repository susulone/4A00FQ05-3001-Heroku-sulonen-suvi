const express = require("express");
const mysql = require("mysql");
const app = express();
const port = process.env.PORT || 8080;

require("dotenv").config();
let config = {
  host: "mydb.tamk.fi",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  connection.query("SELECT * from locations", (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
