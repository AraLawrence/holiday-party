angular.module('ComebackCtrls', ['ngRoute', 'ngAnimate'])
.controller('ComebackCtrl', ['$scope', '$http', function($scope, $http) {
	var searchTerm = null;

	$scope.$watch('search', function() {
		searchTerm = $scope.search;
		console.log(searchTerm);
	})

	$scope.setType = function(type) {
		if (type == "comeback") {
			$scope.type = "comeback";
		} else {
			$scope.type = "affirmation"
		}
	}

}])