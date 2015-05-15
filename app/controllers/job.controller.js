'use strict';

angular.module('freelanceApp')
  .controller('jobCtrl', ['$scope', 'JobService','$stateParams', function($scope, JobService, $stateParams) {
    $scope.jobs = JobService.data;
    $scope.single_job = JobService.data[$stateParams._id]
  }]);
