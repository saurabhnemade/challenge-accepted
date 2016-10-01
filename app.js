var express = require('express');
var jsonfile = require('jsonfile');

var app = express();
var data = jsonfile.readFileSync(__dirname + '/www/data/data.json');

var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

require(__dirname + '/routes')(app,data);
app.use('/',express.static(__dirname+'/www'));
app.use('/css',express.static(__dirname+'/www/css'));

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
