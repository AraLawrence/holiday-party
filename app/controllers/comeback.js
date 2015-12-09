angular.module('ComebackCtrls', ['ngRoute', 'ngAnimate'])
.controller('ComebackCtrl', ['$scope', '$http', '$timeout', 'Answers', function($scope, $http, $timeout, Answers) {
	var searchTerm = null;
	$scope.listState = true;

	$scope.$watch('search', function() {
		searchTerm = $scope.search;
		$scope.data = {};
		if(searchTerm) {
			$scope.answers.forEach(function(a) {
				var searchIt = a.category.toString();
				if(searchIt.indexOf(searchTerm) != -1) {
					$scope.data[a._id] = a.category.toString();
				}
			});
		}
	})

	$scope.setType = function(type) {
		if (type == "comeback") {
			$scope.affbtn = null;
			$scope.cbbtn = "green";
			$scope.type = "comeback";
			$scope.path = "remark";
			Answers.getAnswers('remark').then(function(data) {
				$scope.answers = data;
			});
		} else {
			$scope.affbtn = "green";
			$scope.cbbtn = null;
			$scope.type = "affirmation";
			$scope.path = "affirm";
			Answers.getAnswers('affirm').then(function(data) {
				$scope.answers = data;
			});
		}
	}

	$scope.getContent = function(key) {
		console.log(key)
		Answers.getContent($scope.path, key).then(function(data) {
			$scope.content = data;
		})
		$scope.listState = false;
		$timeout(function() {
			$scope.contentState = true;
		}, 1000);
	}

	$scope.resetState = function() {
		$scope.contentState = !$scope.contentState;
		$timeout(function() {
			$scope.listState = !$scope.listState;
		}, 1000);
	}

	$scope.clear = function() {
		$scope.search = "";
	}

}])




