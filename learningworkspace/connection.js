const mysql = require("mssql");

const sql = require("mssql");
const config = {
  server: "localhost",
  user: "dev",
  password: "Mother08#1",
  database: "Talentcentral",
  options: {
    enableArithAbort: true,
  },
};
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));
module.exports = {
  sql,
  poolPromise,
};
