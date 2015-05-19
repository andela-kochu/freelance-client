'use strict';

angular.module('freelanceApp')
  .controller('homeCtrl', ['$scope', '$rootScope','sideNav','AuthService', 'JobService',
              '$location', '$localStorage', '$window', '$timeout', function($scope, $rootScope, sideNav,
               AuthService, JobService, $location,  $localStorage, $window, $timeout) {

    $scope.close = sideNav.close;
    $scope.toggle = sideNav.buildToggler;
    $scope.recentJobs = JobService.jobs;

    $scope.$on("$locationChangeStart", function(event) {
      if($window.sessionStorage.token) {
        $scope.isLogged = true;
        $scope.username = $window.sessionStorage.user.split(' ')[1];
      }
      else {
        $scope.isLogged = false;
      }
    });

    $rootScope.hideOutProg = true;
    $scope.logout = function() {
      $rootScope.hideOutProg = false;
      $window.sessionStorage.clear();
      $timeout(function(){
        $rootScope.hideOutProg = true;
        $location.url("/signin");
      }, 1500);
    };
  }]);
