const fs = require("fs");

const readfile = (callback) =>
  fs.readFile("hello.txt", "UTF-8", (err, data) => {
    if (!err) return callback(null, data);
    else callback(err, null);
  });

// readfile((data) => {
//   console.log(err, data);
// });

new Promise((resolve, reject) => {
  readfile((err, data) => {
    if (err == null) resolve(data);
    else reject("file reading failed");
  });
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
