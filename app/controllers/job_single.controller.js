'use strict';

angular.module('freelanceApp')
  .controller('job_singleCtrl', ['$scope', 'singleJobPromise', function($scope, singleJobPromise) {
    $scope.single_job = singleJobPromise;
  }]);
