"use strict";angular.module("weatherEyeApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("weatherEyeApp").controller("MainCtrl",["$scope","WeatherCalculator",function(a,b){a.activities=[{name:"run",tempRange:[40,90]},{name:"ski",tempRange:[-10,30]},{name:"swim",tempRange:[68,90]},{name:"ice fish",tempRange:[-20,30]}],a.myActivity=a.activities[1],a.today=Date.now(),a.hourlyForecast=b.getForecastHourly(),a.onChange=function(){a.bestDays=b.recommend(a.myActivity.tempRange[0],a.myActivity.tempRange[1]),console.log(a.bestDays),a.result=0==a.bestDays.length?"Based on our calculations, for at least the next ten days, there is no good day to "+a.myActivity.name+", sorry.":"Based on our calculations, the best day(s) to "+a.myActivity.name+" are:"}}]),angular.module("weatherEyeApp").controller("AboutCtrl",["$scope",function(){}]),angular.module("weatherEyeApp").controller("MenuController",["$scope",function(a){a.setActive=function(b){a.highlight=b}}]),angular.module("weatherEyeApp").service("WeatherCalculator",function(){this.getForecastHourly=function(){var a=new Date,b=a.getHours(),c=hourlyForecastData.hourly_forecast[b];return{condition:c.condition,temp:c.temp.english,icon:c.icon_url}},this.recommend=function(a,b){for(var c=new Array,d=0;9>d;d++){var e=tenDayForecast.forecast.simpleforecast.forecastday[d],f=parseInt(e.high.fahrenheit);f>=a&&b>=f&&c.push(e.date.weekday+", "+e.date.monthname_short+" "+e.date.day)}return c}});