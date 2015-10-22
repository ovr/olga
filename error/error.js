'use strict';

angular.module('myApp.error', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/error', {
    templateUrl: 'error/error.html',
    controller: 'ErrorCtrl'
  });
}])

.controller('ErrorCtrl', [function() {

}]);