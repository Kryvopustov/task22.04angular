var app = angular.module("myApp", [
	// 'ngRoute',
	'appModuleControllers'
	])

// app.config(['$routeProvider',
// 	function($routeProvider) {
// 		$routeProvider.
// 			when('/:buttonName',{
// 				templateUrl: 'partials/body-table.html',
// 				controller: 'cityCtrl'
// 			}).
// 			when('/kharkiv',{
// 				templateUrl: 'partials/body-table.html',
// 				controller: 'kharkivCtrl'
// 			}).
// 			when('/kiev',{
// 				templateUrl: 'partials/body-table.html',
// 				controller: 'kievCtrl'
// 			}).						
// 			otherwise({
// 				redirectTo: '/weatherman'
// 			});
// 	}
// ]);	