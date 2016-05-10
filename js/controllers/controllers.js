var appModuleControllers = angular.module('appModuleControllers', []);

appModuleControllers.controller('mainCtrl', ['$scope','$http', 
  function($scope, $http){
    $http.get('http://api.openweathermap.org/data/2.5/box/city?bbox=30.0,48.0,33.0,51.0,1111&cluster=yes&APPID=58f420f86326565c7d552af951c62bbb').success(function(data){
      $scope.button = data;
  })

  $scope.myClick = function(id){
    $http.get('http://api.openweathermap.org/data/2.5/forecast/city?id='+id+'&APPID=58f420f86326565c7d552af951c62bbb').success(function(data){
      $scope.allInfo = data;
      console.log(data);
    }); 
  };

  $scope.kelvinToCelsius = function(temp) {
    var celsius = temp - 273.15;
    return celsius.toFixed(2);
  };

  $scope.sortBy = 'name';

}])