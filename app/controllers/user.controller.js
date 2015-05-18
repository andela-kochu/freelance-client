'use strict';

angular.module('freelanceApp')
  .controller('userCtrl', ['$scope', '$location', '$window', 'UserService', 'AuthService',
    function ($scope, $location, $window, UserService, AuthService) {
      $scope.hidemsg = true;
      $scope.hideProg = true;

      $scope.logIn = function() {
        $scope.hideProg = false;
        var formData = {
                emailAddress: $scope.email,
                password: $scope.password
            };
        UserService.logIn(formData)
          .success(function(data) {
            $scope.hideProg = true;
            AuthService.isLogged = true;
            $window.sessionStorage.token = data.token;
            $location.path("/profile");
          })
          .error(function(data, status) {
            $scope.hidemsg = false;
            $scope.hideProg = true;
            $scope.msg = data.message;
          });
      };

        $scope.signUp = function() {
          $scope.hideProg = false;
          var formData = {
                name: $scope.name,
                emailAddress: $scope.email,
                password: $scope.password,
                phoneNumber: $scope.phone,
                interests: $scope.interests,
                skills: $scope.skills,
                gender: $scope.gender
              };
          UserService.signUp(formData)
            .success(function(data) {
              $scope.hideProg = true;
              AuthService.isLogged = true;
              $window.sessionStorage.token = data.token;
              $location.path("/profile");
            })
            .error(function(data, status) {
              console.log(status, data);
              $scope.hidemsg = false;
              $scope.hideProg = true;
              $scope.msg = data.message;
            });
        };
    }]);
