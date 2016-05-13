(function(){
  'use strict';

  angular
    .module('myApp.services')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http'];

  function dataservice($http){
    var  buttonList = {};
    var  url = '';
    var getButtonList = function() {
      url = 'http://api.openweathermap.org/data/2.5/box/city?bbox=29.0,46.0,35.0,52.0,1111&cluster=yes&APPID=58f420f86326565c7d552af951c62bbb';
      return $http.get(url);
    };
    var getById = function(id) {
      url = 'http://api.openweathermap.org/data/2.5/forecast/city?id='+id+'&APPID=58f420f86326565c7d552af951c62bbb';
      return $http.get(url);
    }
    return angular.extend(buttonList, {
      getButtonList: getButtonList,
      getById: getById
    });  
  }
})();
//http://api.openweathermap.org/data/2.5/box/city?bbox=30.0,48.0,33.0,51.0,1111&cluster=yes&APPID=58f420f86326565c7d552af951c62bbb