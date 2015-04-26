var app = require('nodeular-core/express');
var api = require('./api');

app.get('/a', function (req, res){
  setTimeout(function (){
    var date = res.locals.dateStamp || new Date();
    return res.status(200).send('a - ' + date);
  }, 1000);
});

app.use('/a/api', api);

module.exports = app;