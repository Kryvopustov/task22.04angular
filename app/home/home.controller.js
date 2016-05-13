(function(){

  angular
    .module('myApp.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'dataservice', '$stateParams'];  

  function HomeController($scope, dataservice, $stateParams) {
    dataservice.getButtonList().then(function(response){
      $scope.city = response.data;
    });
    $scope.sortBy = 'name';
  };
})();