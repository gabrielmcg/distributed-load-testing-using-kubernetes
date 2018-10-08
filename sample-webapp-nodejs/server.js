'use strict';

const express = require('express');

var bodyParser = require('body-parser');

// Constants
const PORT = 8999;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

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

  res.send('/login - device: ' + req.body.deviceid);



});

app.post('/metrics', (req, res) => {
// deviceid = self.request.get('deviceid')
// timestamp = self.request.get('timestamp')
        
// self.response.headers['Content-Type'] = 'text/plain'
// self.response.write('/metrics - device: {}, timestamp: {}\n'.format(deviceid, timestamp))

  res.send('/metrics - device: ' + req.body.deviceid + ' timestamp: ' + req.body.timestamp);

});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
