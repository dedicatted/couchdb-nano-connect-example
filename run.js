var nano = require('nano')('http://admin:password@127.0.0.1:5984');

nano.db.get('alice', function(err, body) {
  if (!err) {
    console.log(body);
  }
});