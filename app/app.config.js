(function(){
  'use strict';

  angular
    .module('myApp')
    .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home',{
          url: '/home',
          templateUrl: 'app/home/home.template.html',
          controller: 'HomeController'
        })
        .state('city',{
          url: '/cities/:id',
          templateUrl: 'app/city/city.template.html',
          controller: 'CityController'
        });
      
      $urlRouterProvider.otherwise('/home');  
    }

})();