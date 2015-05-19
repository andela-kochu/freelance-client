'use strict';

angular.module('freelanceApp')
  .controller('userCtrl', ['$scope', '$location', '$window', 'UserService',
    function ($scope, $location, $window, UserService) {
      $scope.hidemsg = true;
      $scope.hideProg = true;
      $scope.host = $location.host();
      $scope.protocol = $location.protocol();

   //   UserService.google();

      $scope.logIn = function() {
        $scope.hideProg = false;
        var formData = {
                emailAddress: $scope.email,
                password: $scope.password
            };
        UserService.logIn(formData)
          .success(function(data) {
            $scope.hideProg = true;
            $window.sessionStorage.token = data.token;
            $window.sessionStorage.user = data.user;
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
              $window.sessionStorage.token = data.token;
              $window.sessionStorage.user = data.user;
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
