'use strict';

angular.module('freelanceApp')
  .controller('jobCtrl', ['$scope', 'JobService', function($scope, jobService) {
    $scope.jobs = jobService.data;
  }]);
