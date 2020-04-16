const express = require("express");
const router = express.Router();
const sqlconnection = require("./connection");
router.get("/", (req, res) => {
    console.log("Query");
  sqlconnection.query("select * from alerts_details", (err, res) => {
    if (!err) {
      res.send(res);
    } else {
      console.log(err);
      sqlconnection.destroy();
    }
  })
});

module.exports = router;
