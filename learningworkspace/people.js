const express = require("express");
const router = express.Router();
const { poolPromise } = require("./connection");
const { sql } = require("./connection");

router.get("/", async (req, res) => {
  try {
    
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("input_parameter", sql.Numeric, req.query.id)
      .query(
        "select top 1 * from dbo.alerts_details where id = @input_parameter"
      );
    res.json(result.recordset);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

module.exports = router;
