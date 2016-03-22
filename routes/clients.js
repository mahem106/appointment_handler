var express = require('express');
var router = express.Router();

var Client = require('../models/client.js');

router.get('/', function(req, res) {
  Client.find({}, function(err, clients) {
    res.status(err ? 400 : 200).send(err || clients);
  });
});

router.post('/', function(req, res) {
  Client.create(req.body, function(err, savedClient) {
    res.status(err ? 400 : 200).send(err || savedClient);
  });
});



module.exports = router;
