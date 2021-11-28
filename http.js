import http from 'http';

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Welcome to the home page');
// });

// Start from here
const server = http.createServer((req, res) => {
  // console.log(req.url);
  // console.log(req.method);

  // res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url === '/') {
    res.end('<h1>Welcome to the home page</h1>');
  } else if (req.url === '/about') {
    res.end('<h2>Welcome to the About page</h2>');
  } else {
    res.end('Error Page');
  }
});

server.listen(4000, () => {
  console.log('server is running on port 4000');
});
