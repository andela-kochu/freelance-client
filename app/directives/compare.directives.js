'use strict';

var compareTo = function() {
    return {
      require: "ngModel",
      scope: {
        otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.compareTo = function(modelValue) {
          if(modelValue == scope.otherModelValue){
          // console.log('Match')
          }
          //return modelValue === scope.otherModelValue;
        };
        scope.$watch("otherModelValue", function() {
       //   ngModel.$validate();
        });
      }
    };
  };
angular.module('freelanceApp')
  .directive("compareTo", compareTo);
