const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

const posts = [
  {
    name: "Kyle",
    title: "post 1",
  },
  {
    name: "Nitin",
    title: "post 2",
  },
];

const users = [];
app.use(express.json());

app.get("/post", authenticateToken, (req, res) => {
  res.json(posts.filter((posts) => posts.name == req.user.name));
});

app.get("/getUser", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const user = { name: req.body.name, password: salt + hashPassword };
    users.push(user);
    res.send({
      status: 201,
      message: "User Authenticated",
    });
  } catch (error) {
    res.sendStatus(500);
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.Access_Secret_Token);
  res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, next) {
  // console.log(req);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[2];
  console.log(token);
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.Access_Secret_Token, (err, user) => {
    if (err)
      return res.status(403).send({
        success: false,
        message: "No Token Provided",
        status: 403,
      });
    req.user = user;
    next();
  });
}

app.listen(3000);
