// code to understand OS operations / Libuv OS Delegation
const https = require('https');
const start = Date.now();

const doRequest = () => {
  https
    .request('https://ww.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
};

// http request is not handle by libuv. It is delegated to OS async feature
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();