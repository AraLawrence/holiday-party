var app = angular.module('HolidayComebackApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: "/views/index.html",
		controller: ""
	}).when('/:id', {
		templateUrl: "/views/show.html",
		controller: ""
	});

	$locationProvider.html5Mode(true);
}])