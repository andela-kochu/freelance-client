'use strict';

angular.module('freelanceApp')
  .factory('UserService', ['$http', '$window', function($http, $window) {
    var baseUrl = "http://freelance-app.herokuapp.com/api/v1";
    var currentUserToken = $window.sessionStorage.token;
    return {
      logIn: function(data) {
        return $http.post(baseUrl + '/users/login', data);
      },

      signUp: function(data) {
        return $http.post(baseUrl + '/users', data);
      },

      profile: function() {
        return $http.get(baseUrl + '/users/one').then(function(res){
          return res.data;
        });
      }
    };
}]);

