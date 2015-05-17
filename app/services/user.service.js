'use strict';

angular.module('freelanceApp')
  .factory('UserService', ['$http', '$window', function($http, $window) {
    var baseUrl = "http://freelance-app.herokuapp.com/api/v1";
    var user = {
      userData: []
    };
    user.logIn = function(data) {
      return $http.post(baseUrl + '/users/login', data);
    };

    user.signUp = function(data) {
      return $http.post(baseUrl + '/users', data);
    };

    user.editProf = function(data) {
      return $http.put(baseUrl + '/users/one', data);
    };

    user.deleteUser = function() {
      return $http.delete(baseUrl + '/users/one');
    };

    user.profile = function() {
      return $http.get(baseUrl + '/users/one').then(function(res){
        angular.copy(res.data, user.userData);
      });
    };
    return user;
}]);

