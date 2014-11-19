'use strict';

/**
 * @ngdoc function
 * @name weatherEyeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatherEyeApp
 */
angular.module('weatherEyeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
