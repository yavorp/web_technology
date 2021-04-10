const fs = require('fs');

// sync
// fs.writeFileSync('./random.txt', 'Hello world');
// fs.writeFile('./async.txt', 'This is async', err => {
//   if (err) {
//     console.error(`ERROR ${err}`);
//   } else {
//     fs.readFile('./async.txt', (error, buffer) => {
//       if (error) {
//         console.log(error);
//       } else {
//         const result = buffer.toString();
//         console.log(result);
//       }
//     });
//   }
//   console.log('from fs callback');
// });

// setTimeout(() => {
//   console.log('from set timeout');
// }, 0);


// console.log('asdf');

// const promise = new Promise((resolve, reject) => {
//   console.log('in promise');
//   resolve('resolved')
// });

// promise.then(fulfilledResult => console.log(fulfilledResult));

function writeFile(path, content) {
  return new Promise((resolve, reject) => {
    // reject('some bloody error');
    // return;
    fs.writeFile(path, content, (error) => {
      if (error) {
        reject(error);
      }
      resolve;
      console.log('after resolve');
    })
  });
}

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFileSync(path, (error, buffer) => {
      if (error) {
        reject(error);
        return;
      }
      const result = buffer.toString();
      resolve(result);
    });
  });
}

writeFile('async.txt', 'Hello from promise').then(async () => {
  const content = await readFile('async.txt');
  console.log(content);
}).then(() => console.log('asdf'));
