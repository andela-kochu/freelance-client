'use strict';

angular.module('freelanceApp')
  .controller('homeCtrl', ['$scope','sideNav', function($scope, sideNav) {
      $scope.close = sideNav.close;
      $scope.toggleRight = sideNav.buildToggler;
    }]);
