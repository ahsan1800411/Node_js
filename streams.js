const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  //   fs.readFile('demo.txt', (err, data) => {
  //     if (err) throw new Error(err);
  //     res.end(data.toString());
  //   });
  // 2nd way;
  //   const rstream = fs.createReadStream('demo.txt');
  //   //   to read data from a file
  //   rstream.on('data', (chunkData) => {
  //     res.write(chunkData);
  //   });
  //   //   to tell the server that the file is read and there is more data to read
  //   rstream.on('end', () => {
  //     res.end();
  //   });
  //   //   to show error if the file is not found
  //   rstream.on('error', (err) => {
  //     res.end('File not Found');
  //   });
  //      3rd way;
  //   const rstream = fs.createReadStream('demo.txt');
  //   rstream.pipe(res);
});

server.listen(5000);
console.log('Server is running on port 5000');
