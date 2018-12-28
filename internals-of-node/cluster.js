process.env.UV_THREADPOOL_SIZE = 4;

const cluster = require('cluster');

// Is the file being executed in master mode?
if (cluster.isMaster) {
  // cause index.js to be executed *again* but in child/slave mode
  cluster.fork();
  cluster.fork();
} else {
  // I am a child, I am going to act like a server and do nothing else
  const express = require('express');
  const crypto = require('crypto');
  const app = express();

  const PORT = 3000;

  app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      res.send('Hi there');
    });
  });

  app.get('/test', (req, res) => {
    res.send('Hello from test');
  });

  app.get('/fast', (req, res) => {
    res.send('this coming from fast');
  });

  app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
  });
}
