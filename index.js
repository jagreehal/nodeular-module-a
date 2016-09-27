var api = require('./api');


function init(app) {

  app.get('/a', function (req, res) {
    setTimeout(function () {
      var date = res.locals.dateStamp || new Date();
      return res.status(200).send('aa - ' + date);
    }, 1000);
  });

  app.use('/a/api', api);
}

module.exports = init;