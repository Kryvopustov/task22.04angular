var appModuleControllers = angular.module('appModuleControllers', []);

appModuleControllers.controller('mainCtrl', ['$scope','takeAjax', '$routeParams', 

  function($scope, takeAjax, $routeParams){
    takeAjax.getButtonList().then(function(response){
      $scope.city = response.data;
      console.log($routeParams);
    });

  $scope.sortBy = 'name';
}]);

appModuleControllers.controller('main1Ctrl', ['$scope', 'takeAjax','$routeParams', 
  function($scope, takeAjax, $routeParams){
    takeAjax.getButtonList().then(function(response){
      $scope.city = response.data;
      console.log($routeParams);
    });

  $scope.showTable = false;
  $scope.showSpinner = true;

  function myClick (){
    $scope.showTable = false;
    $scope.showSpinner = false;
    
    takeAjax.getById($routeParams.cityId).then(function(response){
      $scope.allInfo = response.data;

      $scope.showSpinner = true;
      $scope.showTable = true;

      console.log(response)
    })
  };

  myClick();

  $scope.kelvinToCelsius = function(temp) {
    var celsius = temp - 273.15;
    return celsius.toFixed(2);
  };

}]);