const express = require("express");
const router = express.Router();
const sqlconnection = require("./connection");
router.get("/", (req, res) => {
    console.log("Query");
  sqlconnection.query("select top 1 * from alerts_details", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      sqlconnection.destroy();
    }
  })
});

module.exports = router;
