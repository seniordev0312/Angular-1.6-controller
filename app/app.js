'use strict';

var app = angular.module('myApp', [
  'ngRoute',
  'starter.controller',
  'myApp.version',
  'starter.services',
  'restangular'
])

app.config(['$locationProvider', '$routeProvider', 'RestangularProvider', function($locationProvider, $routeProvider, RestangularProvider) {
    // $locationProvider.hashPrefix('!');

    RestangularProvider.setBaseUrl('https://api.myjson.com/bins/'); 

  	$routeProvider
    .when("/cars", {
        templateUrl : "pages/cars.html",
        controller: "carsCtrl"
    })

  	$routeProvider.otherwise({redirectTo: '/cars'});
}])