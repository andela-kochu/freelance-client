'use strict';

angular.module('freelanceApp')
  .controller('jobCtrl', ['$scope', 'jobService', function($scope, jobService) {
    $scope.jobs = jobService.data;
  }]);
