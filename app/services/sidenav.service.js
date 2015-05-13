'use strict';

angular.module('freelanceApp').factory('sideNav', ['$mdUtil', '$mdSidenav', function($mdUtil, $mdSidenav) {
  return {
    buildToggler: $mdUtil.debounce(function(){
        $mdSidenav('left').toggle();
    },300),
    close: function () {
       $mdSidenav('left').close();
      }
  };
}]);
