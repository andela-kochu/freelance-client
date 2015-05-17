'use strict';

angular.module('freelanceApp')
  .controller('profileCtrl', ['$scope', '$location', '$window',
            'UserService', 'AuthService', 'profilePromise', '$mdDialog',
    function ($scope, $location, $window, UserService, AuthService, profilePromise, $mdDialog) {

      $scope.profile = profilePromise;

      $scope.editUser = function(ev) {
        $mdDialog.show({
          controller: editUserCtrl,
          templateUrl: '../app/partials/edit.html',
          targetEvent: ev,
        })
        .then(function(answer) {
          $scope.alert = 'You said the information was "' + answer + '".';
          }, function() {
          $scope.alert = 'You cancelled the dialog.';
          });
      };
      function editUserCtrl($scope, $mdDialog) {
        $scope.hide = function() {
          $mdDialog.hide();
        };
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
      }
  }]);
