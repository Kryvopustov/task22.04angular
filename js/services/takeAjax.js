app.factory('takeAjax', ['$http', function($http){
  var 
    buttonList = {};
    url = '';
  _getButtonList = function() {
    url = 'http://api.openweathermap.org/data/2.5/box/city?bbox=29.0,46.0,35.0,52.0,1111&cluster=yes&APPID=58f420f86326565c7d552af951c62bbb';
    return $http.get(url);
  };
  _getById = function(id) {
    url = 'http://api.openweathermap.org/data/2.5/forecast/city?id='+id+'&APPID=58f420f86326565c7d552af951c62bbb';
    return $http.get(url);
  }
  return angular.extend(buttonList, {
    getButtonList: _getButtonList,
    getById: _getById
  });  
}]);

//http://api.openweathermap.org/data/2.5/box/city?bbox=30.0,48.0,33.0,51.0,1111&cluster=yes&APPID=58f420f86326565c7d552af951c62bbb