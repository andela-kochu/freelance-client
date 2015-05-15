'use strict';

angular.module('freelanceApp', ['ngMaterial', 'ui.router']);

angular.module('freelanceApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/partials/home.view.html',
          controller: 'homeCtrl'
        })
        .state('signin', {
          url: '/signin',
          templateUrl: 'app/partials/signin.view.html',
          controller: 'signinCtrl'
        })
        .state('jobs', {
          url: '/jobs',
          templateUrl: 'app/partials/job.view.html',
          controller: 'jobCtrl'
        })
        .state('jobs_single', {
          url: '/jobs/:_id',
          templateUrl: 'app/partials/job_single.view.html',
          controller: 'jobCtrl'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'app/partials/signup.view.html',
          controller: 'signupCtrl'
        });
    $urlRouterProvider.otherwise('home');
  }]);
