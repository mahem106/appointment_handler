'use strict';

var app = angular.module('AppointmentApp');

app.service('AppointmentService', function($http) {

  this.getAll = function() {
    return $http.get('/appointments');
  };

  this.getUpcoming = function() {
    return $http.get('/appointments/upcoming');
  };

  this.create = function(appointment) {
    return $http.post('/appointments', appointment);
  };

  this.update = function(appointmentId, updateObj) {
    return $http.put(`/appointments/${appointmentId}`, updateObj);
  };

  this.toggleCheckin = function(appointmentId) {
    return $http.put(`/appointments/${appointmentId}/checkin`);
  };

  this.addClient = function(appointmentId, clientId) {
    return $http.put(`/appointments/${apptId}/addClients/`, { clientIds: clientIds });
  };

});
