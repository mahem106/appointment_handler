'use strict';

var mongoose = require('mongoose');

var Client = mongoose.model('Client', {
  name: String,
  phone: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = Client;
