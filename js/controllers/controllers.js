var appModuleControllers = angular.module('appModuleControllers', []);

appModuleControllers.controller('cherkassyCtrl', ['$scope', '$http', 
	function($scope, $http) {
		$http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=710791&APPID=58f420f86326565c7d552af951c62bbb').success(function(data){
			console.log(data);
			$scope.allInfo = data;
		});
	}
]);

appModuleControllers.controller('kharkivCtrl', ['$scope', '$http', 
	function($scope, $http) {
		$http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=706483&APPID=58f420f86326565c7d552af951c62bbb').success(function(data){
			$scope.allInfo = data;
		});
	}
]);

appModuleControllers.controller('kievCtrl', ['$scope', '$http', 
	function($scope, $http) {
		$http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=703448&APPID=58f420f86326565c7d552af951c62bbb').success(function(data){
			$scope.allInfo = data;
		});
	}
]);








/*app.controller('MainController', ['$scope', 'takeAjax', function($scope, takeAjax){
	takeAjax.success(function(data){
		$scope.allInfo = data;
	})
}])*/