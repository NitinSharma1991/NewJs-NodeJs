const fs = require("fs");

const readfile = (callback) =>
  fs.readFile("hello.txt", "UTF-8", (err, data) => {
    if (!err) return callback(null, data);
    else callback(err, null);
  });

readfile(myfunc);
function myfunc(err, data) {
  console.log(err, data);
}

// new Promise((resolve, reject) => {
//   readfile((err, data) => {
//     if (err == null) {
//       // fs.appendFile("hello.txt", "\n Yes data added", (err) =>
//       //   console.log('File appended')
//       // );
//       resolve(data);
//     } else reject("file reading failed");
//   });
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Folders

fs.mkdir("tutorial", (err) => console.log("successfully created"));
