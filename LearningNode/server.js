const express = require("express");

const app = express();
app.use(express.json());
const list = [
  {
    name: "Nitin",
    age: 29,
    love: "Xyz",
  },
  {
    name: "Sachin",
    age: 34,
    love: "Xyz",
  },
  {
    name: "Rinku",
    age: 36,
    love: "Xyz",
  },
];
app.get("/getList/:age", (req, res) => {
  console.log(req.params.age);
  //   res.json(list.filter((item) => item.age == req.params.age));
  res.set({
    "Content-Type": "application/",
    "Content-Length": "123",
    ETag: "12345",
  });
  res.send({
    data: list,
    status: 200,
  });
  //   res.redirect("http://google.com");
});
app.listen(8080);
