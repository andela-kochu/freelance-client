'use strict';

angular.module('freelanceApp')
  .controller('job_singleCtrl', ['$scope', 'singleJobPromise', 'JobService', function($scope, singleJobPromise, JobService) {
    $scope.single_job = singleJobPromise;
    $scope.applyForJob = function(slug){
      JobService.applyFor(slug).then(function(res){
        console.log(res)
      })
    };
  }]);
