angular.module('freelanceApp')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('teal')
      .warnPalette('pink');
});
