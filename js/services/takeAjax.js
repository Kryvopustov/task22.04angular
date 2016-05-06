app.factory('takeAjax', ['$http', function($http){
	return $http.get("http://api.openweathermap.org/data/2.5/forecast/city?id=710791&APPID=58f420f86326565c7d552af951c62bbb")
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});

}]);