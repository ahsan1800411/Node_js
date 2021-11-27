import http from 'http';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to the home page');
});

server.listen(4000, () => {
  console.log('server is running on port 4000');
});
