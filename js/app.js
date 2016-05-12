var app = angular.module("myApp", [
  'ngRoute',
  'appModuleControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/cities',{
        templateUrl: 'partials/home.html',
        controller: 'mainCtrl'
      })
      .when('/cities/:cityId',{
        templateUrl: 'partials/cityId.html',
        controller: 'main1Ctrl'
      })
      .otherwise({
        redirectTo: '/cities'
      })
  }])