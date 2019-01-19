const functions = require('firebase-functions');

const endpointName = 'endpoint';

exports[endpointName] = functions.https.onRequest((req, res) => {
  // handle http request
  res.send('response');
});
