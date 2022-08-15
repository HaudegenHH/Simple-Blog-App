const log = console.log;

// reading files
const fs = require('fs');

const path = './docs/test.txt';

// asynchronous -> non-blocking
fs.readFile(path, (err, data) => {
  if (err) {
    log(err.message);
  }
  log(data.toString());
});
// that code runs first:
log('last line');

// writing with fs module

let str = 'TEST';

/*
fs.writeFile('./docs/test.txt', str, (err) => {
  if (err) {
    log(err.message);
  } else {
    log('file successfully written');
  }
});
*/
// directories
// first check if dir already exists, if not create it, otherwise remove it:
/*
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      log(err.message);
    } else {
      fs.writeFile('./assets/test.txt', str, (err) => {
        if (err) {
          log(err.message);
        } else {
          log('file successfully written');
        }
      });
    }
  });
} else {
  // log('dir already exists');
  //remove dir instead
  fs.rmdir('./assets', (err) => {
    if (err.code === 'ENOTEMPTY') {
      fs.unlink('./assets/test.txt', (err) => {
        if (err) {
          log(err.message);
        } else {
          fs.rmdir('./assets', (err) => {
            if (err) {
              log(err.message);
            } else {
              log('removed');
            }
          });
        }
      });
    } else {
      log('removed');
    }
  });
}
*/

// deleting file else creating it
if (fs.existsSync('./assets/test.txt')) {
  fs.unlink('./assets/test.txt', (err) => {
    if (err) {
      log(err.message);
      return;
    } else {
      log('removed');
    }
  });
} else {
  fs.writeFile('./assets/test.txt', str, (err) => {
    if (err) {
      log(err.message);
      return;
    } else {
      log('created');
    }
  });
}
