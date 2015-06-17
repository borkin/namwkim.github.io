var massvis = angular.module('massvis', []);

massvis.controller('mainCtrl', ['$scope',  function ($scope) {
	$scope.title 		= "Title"
	$scope.subtitle		= "Subtitle"

	$scope.aboutTitle = "aboutTitle"
	$scope.projectDesc = "projectDesc"
}]);