var express = require('express');
var config = require('nodeular-config');

var router = express.Router();

router.get('/', function(req, res) {
    res.send('A version ' + config.version);
});

router.get('/number', function(req, res) {
    res.status(200).send(config.getNumber());
});

module.exports = router;