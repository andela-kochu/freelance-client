angular.module('freelanceApp')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('cyan')
      .warnPalette('red');
});
