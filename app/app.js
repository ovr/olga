'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.error',
  'myApp.main',
  'myApp.search',
  'myApp.version'
]).

config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({redirectTo: '/error'});
  //$locationProvider.html5Mode(true);
}]);
