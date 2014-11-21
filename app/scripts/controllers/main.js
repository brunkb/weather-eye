'use strict';

/**
 * @ngdoc function
 * @name weatherEyeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherEyeApp
 */
angular.module('weatherEyeApp')
  .controller('MainCtrl', function ($scope, WeatherCalculator) {
  	 $scope.activities = [
      {name:'run', tempRange: [40,90]},
      {name:'ski', tempRange: [-10,30]},
      {name:'swim', tempRange: [68,90]},
      {name:'ice fish', tempRange: [-20,30]}
    ];
    
  	$scope.today = Date.now();
 
    $scope.hourlyForecast = WeatherCalculator.getForecastHourly();
    
    $scope.tempRange = false;
 
    $scope.onChange = function() {
    	
    	$scope.bestDays = WeatherCalculator.recommend($scope.myActivity.tempRange[0], 
    	                 $scope.myActivity.tempRange[1]);
    	$scope.tempRange = true;
    
		if ($scope.bestDays.length == 0) {	
            $scope.result = 'Based on our calculations, for at least the next ten days, there is no good day to ' + 
            $scope.myActivity.name + ', sorry.';
        }
        else { 
    		$scope.result = 'Based on our calculations, the best day(s) to ' + $scope.myActivity.name +
    	 	' are:' 
    	 }
    };
  });
