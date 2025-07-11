const f = require('@google-cloud/functions-framework');

f.http('hellogit', (req, res) => {
  res.send('OK');
});
