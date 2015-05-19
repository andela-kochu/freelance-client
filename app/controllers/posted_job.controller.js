'use strict';

angular.module('freelanceApp')
  .controller('myJobsCtrl', ['$scope', '$rootScope', '$location', '$window', 'JobService', '$timeout',
    function ($scope, $rootScope, $location, $window, JobService, $timeout) {

        $scope.hideProg = false;

        $scope.userJobs = JobService.userJobs;
        $timeout(function(){
         $scope.hideProg = true;
        }, 500);

        $scope.viewJob = function(slug){
          $location.path('/jobs/' + slug);
        };

        $scope.editJob = function(slug, job){
          var def = JobService.editSingle(slug, job);
          $scope.hideProg = false;
          $timeout(function(){
            $scope.hideProg = true;
            def.then(function(data){
              JobService.getUserJob();
            });
          }, 2000);
        };

        $scope.deleteJob = function(slug){
          JobService.deleteSingle(slug).then(function(data){
            JobService.getUserJob();
          });
        };
    }]);
