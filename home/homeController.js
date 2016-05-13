(function(){
  app.controller('homeCtrl', ['$scope','takeAjax','$stateParams', 
    function($scope, takeAjax, $stateParams){
      takeAjax.getButtonList().then(function(response){
        $scope.city = response.data;
      });
    $scope.sortBy = 'name';
  }]);
}())