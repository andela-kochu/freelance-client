'use strict';

angular.module('freelanceApp')
  .filter('truncate', function () {
    return function (value, max) {
      if(!value) {
        return '';
      }
      if(!max || value.length<=0) {
        return value;
      }
      var limit = parseInt(max, 10);
      var firstcut = value.substr(0, limit);
      var lastspace = firstcut.lastIndexOf(' ');
      var finalcut = firstcut.substr(0, lastspace);
      return finalcut +  ' …';
    };
  });
