const express = require('express');
const fs = require('fs');
const { router } = require('./routes/user');
const app = express();
const allowedUsers = new Set();
allowedUsers.add('Yavor');
app.use(express.json());

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, buffer) => {
      if (error) {
        reject(error);
        return;
      }
      const result = buffer.toString();
      resolve(result);
    });
  });
}

require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const names = req.query.names;
  if(names === undefined || names === null) {
    res.status(404);
  }
  if(typeof(names) === 'string') {
    res.send(`Hello, ${names}`);
    return;
  } else {
    if (names.length > 1) {
      res.send(`Hello, ${names[1]}`);
    }
  }
  console.log('with invalid data');
});

app.get('/route', async (req, res) => {
  await readFilePromise('./index.html')
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.use('/user', router);

app.post('/', (req, res) => {
  const bodyExample = req.body;
  console.log(bodyExample);
  res.send('Dummy status');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
