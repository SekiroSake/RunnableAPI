/**
 * 
 */
'use strict';
app.controller('AppController', ['$scope','words', '$routeParams', function($scope,words ,$routeParams) {
	  // Your code here
	  apps.success(function(data) {
	      $scope.wordlist = data;
	  });

	}]);
