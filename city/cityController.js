(function(){
  app.controller('cityCtrl', ['$scope','takeAjax','$stateParams', 
    function($scope, takeAjax, $stateParams){
      takeAjax.getButtonList().then(function(response){
        $scope.city = response.data;
      });

    $scope.showTable = false;
    $scope.showSpinner = true;

    function myClick (){
      $scope.showTable = false;
      $scope.showSpinner = false;
      
      takeAjax.getById($stateParams.id).then(function(response){
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
  }]);  
}())