const fs = require("fs");
const zlib = require('zlib');
const glib = zlib.createGzip();

const stream = fs.createReadStream("D:/JS/NewJs-NodeJs/hello.txt", "UTF-8");
const writestream = fs.createWriteStream("example.gz");

stream.on("data", (chunk) => {
  writestream.write(chunk);
  stream.pipe(glib).pipe(writestream);
});
