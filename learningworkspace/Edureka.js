const fs = require("fs");
const http = require("http");
const events = require('events');
const em =  new events.EventEmitter();
fs.writeFile("D:/JS/NewJs-NodeJs/hello.txt", "How are you", (err) => {
  fs.readFile("D:/JS/NewJs-NodeJs/hello.txt", (err, data) => {
    if (!err) console.log(data.toString());
  });
});

var server = http.createServer((req, res) => {
  em.emit("someone requested");
  res.end("Server Works");
});
server.listen(3000, "localhost", () => {
  console.log("server is listening at port number");
});


em.on("someone requested", () => {
  console.log("Event occured");
});
