(function() {
  'use strict';

  angular
    .module('myApp.city')
    .controller('CityController', CityController);

  CityController.$inject = ['$scope', 'dataservice', '$stateParams'];

  function CityController($scope, dataservice, $stateParams) {
    dataservice.getButtonList().then(function(response) {
      $scope.city = response.data;
    });

    $scope.showTable = false;
    $scope.showSpinner = true;

    function myClick() {
      $scope.showTable = false;
      $scope.showSpinner = false;

      dataservice.getById($stateParams.id).then(function(response) {
        $scope.allInfo = response.data;

        $scope.showSpinner = true;
        $scope.showTable = true;
      })
    };

    myClick();

    $scope.kelvinToCelsius = function(temp) {
      var celsius = temp - 273.15;
      return celsius.toFixed(2);
    };
  }

})();