const fs = require("fs");
const zlib = require("zlib");
const zgip = zlib.createGzip();
const unzip = zlib.createGunzip();
const ws = fs.createWriteStream("PipedFile.gz");
const rs = fs.createReadStream("NewTextFile", "UTF-8");

rs.pipe(zgip).pipe(ws);
// for (let i = 0; i < 2000; i++) {
//   let data = `This is it \n`;
//   ws.write(data);
// }

// rs.on("data", (chunk) => {
//   console.log(chunk);
// });
