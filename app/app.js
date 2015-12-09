var app = angular.module('HolidayComebackApp', ['ngRoute', 'ComebackCtrls', 'ComebackServices']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: "/views/index.html",
		controller: "ComebackCtrl"
	}).when('/:id', {
		templateUrl: "/views/show.html",
		controller: "ComebackCtrl"
	});

	$locationProvider.html5Mode(true);
}])