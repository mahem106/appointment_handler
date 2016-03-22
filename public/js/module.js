'use strict';

var app = angular.module('AppointmentApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: 'html/home.html', controller: 'homeCtrl' })

  $urlRouterProvider.otherwise('/');
});


