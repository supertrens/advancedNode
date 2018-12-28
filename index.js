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
