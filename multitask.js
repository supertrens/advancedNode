// threadPool is by default 4 thread
// https doesn't use the thread pool. networking is handle by OS
// fs gt file information from HS before starting to read it ( so two trips to HD)

const https = require('https');
const crypto =require('crypto');
const fs = require('fs');

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

const doHash = () => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash: ', Date.now() - start);
  });
};

doRequest();

fs.readFile('multitask.js' , 'utf8' , () => {
  console.log('FS: ' , Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();