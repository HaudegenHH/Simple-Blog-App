const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const port = 3000;

const server = http.createServer((req, res) => {
  // console.log(`Request URL: ${req.url}, Request Method: ${req.method}`);

  //lodash
  // 1. Bsp
  // random number  .random(min,max)
  //const num = _.random(0, 10);
  //console.log(num);

  // 2. Bsp
  // let a fn run only once
  // jst pass a fn or define a callback:
  // const greet = _.once(() => {
  //   console.log('once!');
  // });
  // greet();
  // greet();

  res.setHeader('Content-Type', 'text/html');

  // send an html file
  let path = './views/';

  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err.message);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(port, 'localhost', () => {
  console.log(`listening on port ${port}`);
});
