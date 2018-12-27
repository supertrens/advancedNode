// code to review how native https call is made on nodeJS.
// note that, unless jquery , axios, request ect... the data is not available at once but instead coming as chunk
const https = require('https');

function test(callback) {
  https
    .request(
      'https://jsonmock.hackerrank.com/api/movies/search/?Title=maze',
      res => {
        let data = '';
        res.on('data', chunk => {
          data += chunk;
        });
        res.on('end', () => {
          callback(JSON.parse(data).total);
        });
      }
    )
    .end();
}

function callback(resp) {
  console.log(resp);
}

test(callback);
