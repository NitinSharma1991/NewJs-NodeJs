const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.use(express.json());

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const accessToken = authenticateToken(user);
//   console.log(accessToken);
  const refreshToken = jwt.sign(user, process.env.Refresh_Secret_Token);
//   console.log(refreshToken);
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

function authenticateToken(user) {
  return jwt.sign(user, process.env.Access_Secret_Token, { expiresIn: "15s" });
}

app.listen(4000);
