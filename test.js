/*
async function cd(i) {
  await console.log(i);
}

for (let i = 10; i >= 0; i--) {
  setTimeout(() => {
    cd(10 - i);
  }, i * 1000);
}

*/

/*
let i = 10;

const int = setInterval(() => {
  console.log(i);
  i--;
}, 1_000);

setTimeout(() => {
  clearInterval(int);
  console.log('Done');
}, 11_000);
*/

const log = console.log;
/*
log(__dirname);
log(__filename);

let dirArr = __dirname.split('\\');
let dir = dirArr[dirArr.length - 1];

log(dir);
*/

