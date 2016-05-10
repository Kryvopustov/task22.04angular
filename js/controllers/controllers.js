var appModuleControllers = angular.module('appModuleControllers', []);

appModuleControllers.controller('mainCtrl', ['$scope','takeAjax', '$http', 

  function($scope, takeAjax){
    takeAjax.getButtonList().then(function(response){
      $scope.button = response.data;
      //console.log(response);
    });

  $scope.myClick = function(id){

    $scope.showTable = false;
    $scope.showSpinner = false;

    //console.log(id);
    
    takeAjax.getById(id).then(function(response){
      $scope.allInfo = response.data;

      $scope.showSpinner = true;
      $scope.showTable = true;

      //console.log(response)
    })
  };

  $scope.kelvinToCelsius = function(temp) {
    var celsius = temp - 273.15;
    return celsius.toFixed(2);
  };

  $scope.sortBy = 'name';

  $scope.showTable = false;
  $scope.showSpinner = true;
}])