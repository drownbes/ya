(function() {
	'use strict';
	var App = angular.module('yazabil', ['yazabil.controllers', 'tien.clndr']);
	angular.module('yazabil.controllers',[]).controller('ctrl',['$scope','$http', function($scope, $http) {
		console.log("sas ");
	}]);

})();
