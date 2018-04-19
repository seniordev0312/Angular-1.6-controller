'use strict';

var app = angular.module('myApp', [
  'ngRoute',
  'starter.controller',
  'myApp.version',
  'starter.services'
])

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  	$routeProvider
    .when("/cars", {
        templateUrl : "pages/cars.html",
        controller: "carsCtrl"
    })

  	$routeProvider.otherwise({redirectTo: '/cars'});
}])