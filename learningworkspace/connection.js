const mysql = require("mysql");

var sqlconnection = mysql.createConnection({
  host: "localhost",
  user: "dev",
  password: "Mother08#1",
  database: "Talentcentral",
  port: 1433,
  multipleStatements: true,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  }
});

sqlconnection.connect((err) => {
  if (!err) {
    console.log("Connection Created");
  } else {
    console.log(err);
  }
});

module.exports = sqlconnection;
