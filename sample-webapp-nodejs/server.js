'use strict';

const express = require('express');

// Constants
const PORT = 8999;
const HOST = '0.0.0.0';

// App
const app = express();

// Set content type GLOBALLY for any response.
app.use(function (req, res, next) {
  res.contentType('text/plain');
  next();
});


app.get('/', (req, res) => {
// self.response.headers['Content-Type'] = 'text/plain'
// self.response.write('Welcome to the "Distributed Load Testing Using Kubernetes" sample web app\n')

  res.send('Welcome to the "Distributed Load Testing Using Kubernetes" sample web app\n');
});


app.post('/login', (req, res) => {
// deviceid = self.request.get('deviceid')
// self.response.headers['Content-Type'] = 'text/plain'
// self.response.write('/login - device: {}\n'.format(deviceid))

  res.send('/login - device: ' + res.get());



});



app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
