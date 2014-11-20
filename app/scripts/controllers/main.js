'use strict';

/**
 * @ngdoc function
 * @name weatherEyeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherEyeApp
 */
angular.module('weatherEyeApp')
  .controller('MainCtrl', function ($scope) {
  	 $scope.activities = [
      {name:'run', value:'run'},
      {name:'ski', value:'ski'},
      {name:'swim', value:'swim'},
      {name:'stay indoors and read', value:'stayin'},
      {name:'play golf in a hail storm', value:'hailgolf'}
    ];
    $scope.myActivity = $scope.activities[1]; 
   
   	$scope.result = 'test';
  
  	$scope.today = Date.now();
  
    
    $scope.activityMap = { 
    	run: { 'temp-min': '40', 'temp-max': '90', 'weather': 'clear' },
    	ski: { 'temp-min': '-10', 'temp-max': '20', 'weather': 'clear'},
    	swim: { 'temp-min': '68', 'temp-max': '90', 'weather': 'clear'},
    	stayin: {'temp-min': '-30', 'temp-max': '90', 'weather': 'rain' },
    	hailgolf: { 'temp-min': '40', 'temp-max': '90', 'weather': 'hail'}
    };
    
      
  });
