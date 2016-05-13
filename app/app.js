var app = angular.module("myApp", [
  'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home',{
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'homeCtrl'
    })
    .state('city',{
      url: '/cities/:id',
      templateUrl: 'app/city/city.html',
      controller: 'cityCtrl'
    })

  $urlRouterProvider.otherwise('/home');  
}])


// var app = angular.module("myApp", [
//   'ngRoute'
// ]);

// app.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider
//       .when('/home',{
//         templateUrl: 'home/home.html',
//         controller: 'homeCtrl'
//       })
//       .when('/cities/:id',{
//         templateUrl: 'city/city.html',
//         controller: 'cityCtrl'
//       })
//       .otherwise({
//         redirectTo: '/home'
//       })
//   }])