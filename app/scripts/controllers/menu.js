'use strict';

/**
 * @ngdoc function
 * @name weatherEyeApp.controller:MenuController
 * @description
 * # MenuController
 * Menu Controller of the weatherEyeApp
 */
angular.module('weatherEyeApp')
  .controller('MenuController', function ($scope) {
	   
    $scope.setActive = function(val) {  
    	$scope.highlight = val;
    };
 
  });
