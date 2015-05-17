'use strict';

angular.module('freelanceApp', ['ngMaterial',
                                'ui.router',
                                'ngStorage',
                                'ngAnimate',
                                'ngAria',
                                'ngMessages'
                              ]);

angular.module('freelanceApp').config([
    '$stateProvider',
    '$urlRouterProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/partials/home.view.html',
          controller: 'homeCtrl'
        })
        .state('jobs', {
          url: '/jobs',
          templateUrl: 'app/partials/job.view.html',
          controller: 'jobCtrl',
          resolve: {
            jobPromise: ['JobService', function(JobService){
              return JobService.getAll();
            }]
          }
        })
        .state('jobs-single', {
          url: '/jobs/:slug',
          templateUrl: 'app/partials/job-single.view.html',
          controller: 'job_singleCtrl',
          resolve: {
            singleJobPromise: ['$stateParams', 'JobService', function($stateParams, JobService){
              return JobService.getSingle($stateParams.slug);
            }]
          }
        })
        .state('signin', {
          url: '/signin',
          templateUrl: 'app/partials/signin.view.html',
          controller: 'userCtrl'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'app/partials/signup.view.html',
          controller: 'userCtrl'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'app/partials/profile.view.html',
          controller: 'profileCtrl',
          resolve: {
            profilePromise: ['UserService', function(UserService){
              return UserService.profile();
            }]
          }
        });
    $urlRouterProvider.otherwise('home');

    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', '$window', function($q, $location, $localStorage, $window) {
            return {
                'request': function (config) {
                    // config.headers = config.headers || {};
                    if ($window.sessionStorage.token) {
                        config.headers.Authorization = $window.sessionStorage.token;
                    }
                    return config;
                },
                'requestError': function(rejection) {
                        console.log('fbfdb')
                    if(rejection.status === 400 || rejection.status === 401 || rejection.status === 403) {
                      $location.path('/signin');
                    }
                    return $q.reject(rejection);
                },
                'responseError': function(rejection) {
                    // do something on error
                    console.log('fdjkdfjk')
                   if(rejection.status === 400 || rejection.status === 401 || rejection.status === 403) {
                      $location.path('/signin');
                    }
                    return $q.reject(rejection);
                }
            };
        }]);
  }]);
