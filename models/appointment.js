'use strict';

var mongoose = require('mongoose');

var appointmentSchema = new mongoose.Schema({
  time: Date,
  name: String,
  clients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client' }],
  createdAt: { type: Date, default: Date.now },
  checkedIn: { type: Boolean, default: false }
});

var Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
