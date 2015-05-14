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
          /*resolve: {
            postPromise: ['posts', function(posts){
              return posts.getAll();
            }]
          }*/
        })
        .state('signin', {
          url: '/signin',
          templateUrl: 'app/partials/signin.view.html',
          controller: 'signinCtrl'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'app/partials/signup.view.html',
          controller: 'signupCtrl'
        });
    $urlRouterProvider.otherwise('home');
  }]);
