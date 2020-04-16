const mysql = require('mysql');

var sqlconnection = mysql.createConnection({
    server: "localhost",
    user: "dev",
    password: "Mother08#1",
    database: "Talentcentral",
    multipleStatements: true,
  });
  
  sqlconnection.connect((err) => {
    if (!err) {
      console.log("Connection Created");
    } else {
      console.log(err);
    }
  });

  module.exports= sqlconnection;