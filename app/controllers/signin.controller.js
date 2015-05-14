'use strict';

angular.module('freelanceApp')
  .controller('signinCtrl', ['$scope','sideNav', function($scope, sideNav) {
      $scope.close = sideNav.close;
      $scope.toggle = sideNav.buildToggler;
    }]);
