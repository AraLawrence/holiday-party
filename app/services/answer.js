angular.module('ComebackServices', [])
.factory('Answers', function($http) {

	var getAnswers = function(type) {
		return $http.get('/api/' + type).then(function(res) {
			return res.data;
		}, function(res) {
			console.log("Err: " + res.data);
		});
	}

	var getContent = function(type, id) {
		console.log('/api/' + type + "/" + id);
		return $http.get('/api/' + type + "/" + id).then(function(res) {
			return res.data;
		}, function(res) {
			console.log("Err: " + res.data);
		});
	}

	var searchActive = function() {
		// return $scope.type;
	}

	return {
		getAnswers: getAnswers,
		getContent: getContent
	}

});