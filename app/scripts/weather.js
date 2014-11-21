'use strict';

angular.module('weatherEyeApp').service('WeatherCalculator', function() {
      this.getForecastHourly = function() {
           var currentHourForecast = hourlyForecastData.hourly_forecast[0];
           return { condition: currentHourForecast.condition,
                    temp: currentHourForecast.temp.english,
                    icon: currentHourForecast.icon_url
                  };
    };
    
    this.recommend = function(tempMin, tempMax) {
    	
    	var result = new Array();
    
        for(var day = 0; day < 9; day++) {
           var forecast = tenDayForecast.forecast.simpleforecast.forecastday[day];
           var temp = parseInt(forecast.high.fahrenheit);
           if(temp >= tempMin && temp <= tempMax) {
           		result.push(forecast.date.weekday + ', ' + forecast.date.monthname_short + ' ' + forecast.date.day);
           }
           
         }  
         return result;
    };
 });